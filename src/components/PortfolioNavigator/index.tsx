import React, { useMemo, useState, useRef, useEffect, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import 'flag-icons/css/flag-icons.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ODSButton, ODSChipSet, ODSToggleChip } from '@telekom-ods/react-ui-kit';
import { Chip, Region, PortfolioService, PortfolioServices } from "./PortfolioServices";
import { ODSCardFeature, ODSCardFeaturePreferredContent } from "@telekom-ods/react-ui-kit";
import clsx from "clsx";

export default function PortfolioServicesColumns() {
  const [query] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set());            // OR
  const [regionsSel, setRegionsSel] = useState<Set<Region>>(new Set()); // OR
  const [open, setOpen] = useState<PortfolioService | null>(null);            // ← sleeve
  // NEW: category filter state + options
  const ALL_CATS = Array.from(new Set(PortfolioServices.map(s => s.category))).sort();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const OTC_CATEGORY_OPTIONS: string[] = ["all", ...ALL_CATS];
  const noDataImg = useBaseUrl('/img/undraw_no-data_ig65.svg');

  const toggleChip = (c: Chip) =>
    setChips((prev) => {
      const next = new Set(prev);
      if (next.has(c)) {
        next.delete(c);
      } else {
        next.add(c);
      }
      return next;
    });

  const toggleRegion = (r: Region) =>
    setRegionsSel((prev) => {
      const next = new Set(prev);
      if (next.has(r)) {
        next.delete(r);
      } else {
        next.add(r);
      }
      return next;
    });

  const categorySelectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = categorySelectRef.current;
    if (!el) return;

    const onChange = (e: Event) => {
      // SCALE emits CustomEvent with { detail: { value } }
      const value = (e as CustomEvent).detail?.value ?? "all";
      setCategoryFilter(value);
    };

    el.addEventListener("scale-change", onChange);
    // Some builds also dispatch a native 'change' — safe to listen to both:
    el.addEventListener("change", onChange);

    return () => {
      el.removeEventListener("scale-change", onChange);
      el.removeEventListener("change", onChange);
    };
  }, []);

  const resetFilters = () => {
    // 1) category -> "all"
    setCategoryFilter("all");

    // 2) chips + regions -> unchecked
    // Use your existing setters for those two pieces of state.
    // (If your state uses arrays, set [] instead of new Set().)
    setChips?.(new Set());   // existing chips state
    setRegionsSel?.(new Set());   // existing regions state
  };

  const isChipActive = (c: Chip) => chips.has(c);
  const isRegionActive = (r: Region) => regionsSel.has(r);

  // React ONLY to chip toggles via capture; block the component's own handler to avoid double-toggles
  const onChipRowClickCapture = (e: React.MouseEvent) => {
    const host = (e.target as HTMLElement)?.closest("scale-chip") as HTMLElement | null;
    if (!host) return;
    const id = host.getAttribute("data-chip") as Chip | null;
    if (!id) return;
    e.preventDefault();
    e.stopPropagation();
    toggleChip(id);
  };

  const onRegionRowClickCapture = (e: React.MouseEvent) => {
    const host = (e.target as HTMLElement)?.closest("scale-chip") as HTMLElement | null;
    if (!host) return;
    const id = host.getAttribute("data-region") as Region | null;
    if (!id) return;
    e.preventDefault();
    e.stopPropagation();
    toggleRegion(id);
  };

  // text + chips(OR) + regions(OR). If none selected -> show all.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PortfolioServices.filter((s) => {
      const mq =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.symbol.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      if (!mq) return false;

      if (chips.size > 0 && !s.chips.some((c) => chips.has(c))) return false;
      if (regionsSel.size > 0 && !s.regions.some((r) => regionsSel.has(r))) return false;

      if (
        categoryFilter !== "all" &&
        s.category !== categoryFilter
      ) {
        return false;
      }

      return true;
    });
  }, [query, chips, regionsSel, categoryFilter]);

  // open sleeve on Enter/Space as well
  function onTileKey(e: KeyboardEvent<HTMLDivElement>, s: PortfolioService) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(s);
    }
  }

  const renderRegionChip = (region: Region) => {
    if (region === "global") return null;

    const cls =
      region === "eu-de" ? "fi fi-de" :
        region === "eu-nl" ? "fi fi-nl" :
          region === "eu-ch" ? "fi fi-ch fis" : "";

    return (
      <span
        className={`${styles.flag} ${cls}`}
        key={region}
        title={region}
      ></span>
    );
  };

  const renderRegionFooter = (region: Region) => {
    if (region === "global") {
      return <span key={region}>GLOBAL</span>;
    }

    const cls =
      region === "eu-de" ? "fi fi-de" :
        region === "eu-nl" ? "fi fi-nl" :
          region === "eu-ch" ? "fi fi-ch fis" : "";

    return (
      <span
        className={`${styles.flag} ${cls}`}
        key={region}
      ></span>
    );
  };

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>{/* heading removed intentionally */}</div>
        </div>
        {/* Filters: categories (single line) */}
        <div className={styles.filtersRow}>
          <div className={styles.filterRow}>
            <scale-dropdown-select
              ref={categorySelectRef}
              label="Filter by category"
              value={categoryFilter}
              className={styles.fullWidthDropdown}
            >
              {OTC_CATEGORY_OPTIONS.map((opt) => (
                <scale-dropdown-select-item
                  key={opt}
                  value={opt}
                  selected={categoryFilter === opt}
                >
                  {opt === "all" ? "All Categories" : opt}
                </scale-dropdown-select-item>
              ))}
            </scale-dropdown-select>
            <scale-button variant="secondary" className={styles.resetBtn} onClick={resetFilters}>
              <scale-icon-action-refresh></scale-icon-action-refresh> Reset Filters
            </scale-button>
          </div>

        </div>

        {/* Filters: chips | regions (single line) */}
        <div className={styles.filtersRow}>
          {/* Capability chips (SCALE) */}
          <div className={styles.bucketsChips} onClickCapture={onChipRowClickCapture}>
            {(["IaaS", "PaaS", "SaaS", "Security", "Management"] as Chip[]).map((c) => (
              <scale-chip
                key={c}
                data-chip={c}
                size="small"
                selected={isChipActive(c) ? true : undefined}
              >
                {c}
              </scale-chip>
            ))}
          </div>

          <span className={styles.filtersSep} aria-hidden="true"></span>

          {/* Region chips (SCALE) */}
          <div className={styles.bucketsRegions} onClickCapture={onRegionRowClickCapture}>
            {(["eu-de", "eu-nl", "eu-ch", "global"] as Region[]).map((r) => (
              <scale-chip
                key={r}
                data-region={r}
                size="small"
                selected={isRegionActive(r) ? true : undefined}
                title={r.toUpperCase()}
              >
                {renderRegionChip(r)}
                {` ${r.toUpperCase()}`}
              </scale-chip>
            ))}
          </div>
        </div>

        <scale-divider></scale-divider>
        {/* Grid */}
        <div className={styles.tileGrid}>
          {filtered.length === 0 ? (
            <div className={styles.emptyFill}>
              <div className={styles.emptyState}>
                <img src={noDataImg} />
                <h3>No results match your filters.</h3>
              </div>
            </div>

          ) : (
            filtered.map((s) => (
              <div className={clsx(styles.odscard__feature_content)}>
                <ODSCardFeature
                  id={s.symbol}
                  contentSlot={
                    <>
                      <ODSCardFeaturePreferredContent
                        productName={s.name}
                        productPrice={s.category + ' | ' + s.chips}
                      />
                      <div className={styles.flags}>
                        {s.regions.map((r) => (
                          <span className={styles.flag} key={r}>
                            {renderRegionFooter(r)}
                          </span>
                        ))}
                      </div>
                    </>
                  }
                  imageProps={{ src: useBaseUrl(s.icon), alt: s.name }}
                  buttonProps={{
                    onClick: () => setOpen(s)
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sleeve */}
      {open && (
        <div className={styles.sleeveBackdrop} onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className={styles.sleeve} onClick={(e) => e.stopPropagation()}>
            <button className={styles.sleeveClose} aria-label="Close" onClick={() => setOpen(null)}>×</button>

            <br /> <br />
            <div className={styles.sleeveHeader}>
              <div className={styles.sleeveSymbol}>{open.symbol}:</div>
              <div className={styles.sleeveTitle}>{open.name}</div>
            </div>

            <div className={styles.sleeveBody}>
              {open.description?.trim() ? open.description : "No description available."}
            </div>

            {open.category === "Finance Services" || open.category === "Sites" ? (
              <div className={styles.sleeveFooterSingle}>
                {/* <scale-button
                    href={open.hc_url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="small"
                  >
                    Go to {open.name}
                    <scale-icon-navigation-external-link accesibility-title="External link, opens in new tab" />
                  </scale-button> */}
                <ODSButton
                  // className={styles.resetBtn}
                  buttonIcon="arrow-right-type-standard"
                  buttonType="standard"
                  label={`Go to ${open.name}`}
                  rel="noopener"
                  rightIcon
                  size="small"
                  variant="primary"
                  href={open.hc_url || "#"}
                  target="_blank"
                />
              </div>
            ) : (
            <div className={styles.sleeveFooter}>
              <ODSButton
                  // className={styles.resetBtn}
                  buttonIcon="arrow-right-type-standard"
                  buttonType="standard"
                  label="Discover Best Practices & Blueprints"
                  rel="noopener"
                  rightIcon
                  size="small"
                  variant="primary"
                href={`/docs/tags/${encodeURIComponent(open.symbol)}`}
                  target="_blank"
                />
              
              <ODSButton
                  // className={styles.resetBtn}
                  buttonIcon="navigation-external-link-type-standard"
                  buttonType="standard"
                  label="Release Notes"
                  rel="noopener"
                  rightIcon
                  size="small"
                  variant="outline"
                href={open.rn_url || "#"}
                  target="_blank"
                />

             <ODSButton
                  // className={styles.resetBtn}
                  buttonIcon="navigation-external-link-type-standard"
                  buttonType="standard"
                  label="Go to Help Center"
                  rel="noopener"
                  rightIcon
                  size="small"
                  variant="outline"
                href={open.hc_url || "#"}
                  target="_blank"
                />
            </div>
            )}
          </div>

        </div>
      )
      }
    </div >
  );
}
