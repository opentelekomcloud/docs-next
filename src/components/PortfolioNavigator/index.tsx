import React, { useMemo, useState, useCallback, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import 'flag-icons/css/flag-icons.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { ODSButton, ODSToggleChip, ODSDropdownSelect, ODSAccordion, ODSText } from '@telekom-ods/react-ui-kit';
import { Chip, Region, PortfolioService, PortfolioServices } from "./PortfolioServices";
import { ODSCardFeature, ODSCardFeaturePreferredContent } from "@telekom-ods/react-ui-kit";
import clsx from "clsx";

// Pre-compute static data outside the component — runs once, never again
const ALL_CATS = Array.from(new Set(PortfolioServices.map(s => s.category))).sort();
const DROPDOWN_ITEMS = [
  { label: "All Categories", value: "all" },
  ...ALL_CATS.map(c => ({ label: c, value: c }))
];

export default function PortfolioServicesColumns() {
  const [query] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set());
  const [regionsSel, setRegionsSel] = useState<Set<Region>>(new Set());
  const [open, setOpen] = useState<PortfolioService | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [filterKey, setFilterKey] = useState(0);

  // All useBaseUrl calls at the top level — never inside loops/callbacks
  const noDataImg = useBaseUrl('/img/undraw_no-data_ig65.svg');

  const toggleCategoryFilter = useCallback((e: any) => {
    const value = e?.value;
    setCategoryFilter(!value || value === "" ? "all" : value);
  }, []);

  const toggleChip = useCallback((c: Chip) =>
    setChips((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    }), []);

  const toggleRegion = useCallback((r: Region) =>
    setRegionsSel((prev) => {
      const next = new Set(prev);
      next.has(r) ? next.delete(r) : next.add(r);
      return next;
    }), []);

  const resetFilters = useCallback(() => {
    setCategoryFilter("all");
    setChips(new Set());
    setRegionsSel(new Set());
    setFilterKey(k => k + 1);
  }, []);

  const isChipActive = (c: Chip) => chips.has(c);
  const isRegionActive = (r: Region) => regionsSel.has(r);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PortfolioServices.filter((s) => {
      if (q && !s.name.toLowerCase().includes(q) && !s.symbol.toLowerCase().includes(q) && !s.category.toLowerCase().includes(q)) return false;
      if (chips.size > 0 && !s.chips.some((c) => chips.has(c))) return false;
      if (regionsSel.size > 0 && !s.regions.some((r) => regionsSel.has(r))) return false;
      if (categoryFilter !== "all" && s.category !== categoryFilter) return false;
      return true;
    });
  }, [query, chips, regionsSel, categoryFilter]);

  const renderRegionChip = (region: Region) => {
    if (region === "global") return "🌐";
    return region === "eu-de" ? "🇩🇪" : region === "eu-nl" ? "🇳🇱" : region === "eu-ch" ? "🇨🇭" : "🌐";
  };

  const renderRegionFooter = (region: Region) => {
    if (region === "global") return <span key={region}>GLOBAL</span>;
    const cls =
      region === "eu-de" ? "fi fi-de" :
        region === "eu-nl" ? "fi fi-nl" :
          region === "eu-ch" ? "fi fi-ch fis" : "";
    return <span className={`${styles.flag} ${cls}`} key={region}></span>;
  };

  // Memoize filters so they only re-render when filter state actually changes
  const filtersContent = useMemo(() => (
    <>
      <div className={styles.filterCategoriesRow}>
        <div>
          <ODSText as="h4" className={styles.odstext_label}>Filter by Category:</ODSText>
        </div>
        <div>
          <ODSDropdownSelect
            icon="checkmark-type-standard"
            size="small"
            defaultValue="All Categories"
            value={categoryFilter}
            items={DROPDOWN_ITEMS}
            mode="standard"
            label="Filter by Category"
            onValueChange={toggleCategoryFilter}
            supportMessage="Support message"
          />
        </div>

      </div>

      <div className={styles.filterChipsRow}>
        <div>
          <ODSText as="h4" className={styles.odstext_label}>Filter by Service Type:</ODSText>
        </div>
        <div key={filterKey} className={styles.bucketsChips}>
          {(["IaaS", "PaaS", "SaaS", "Security", "Management"] as Chip[]).map((c) => (
            <ODSToggleChip
              key={`${c}-${isChipActive(c)}`}
              data-chip={c}
              label={c}
              selected={isChipActive(c) ? true : undefined}
              onSelectedChange={() => toggleChip(c)}
            />
          ))}
        </div>
      </div>

      <div className={styles.filterRegionsRow}>
        <div>
          <ODSText as="h4" className={styles.odstext_label}>Filter by Region:</ODSText>
        </div>
        <div key={filterKey + 1} className={styles.bucketsRegions}>
          {(["eu-de", "eu-nl", "eu-ch", "global"] as Region[]).map((r) => (
            <ODSToggleChip
              key={`${r}-${isRegionActive(r)}`}
              data-region={r}
              label={`${renderRegionChip(r)} ${r.toUpperCase()}`}
              selected={isRegionActive(r) ? true : undefined}
              onSelectedChange={() => toggleRegion(r)}
            />
          ))}
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.bucketsResetFilters}>
          <ODSButton
            className={styles.odsbutton__reset_filters}
            buttonIcon="refresh-type-standard"
            buttonType="standard"
            onClick={resetFilters}
            label="Refresh Filters"
            rel="noopener"
            leftIcon
            size="small"
            variant="secondary"
          />
        </div>
      </div>
    </>
  ), [categoryFilter, chips, regionsSel, filterKey, toggleCategoryFilter, toggleChip, toggleRegion, resetFilters]);

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>

        <div className={clsx(styles.filterAccordionRow, styles.odsaccordion_filters)}>
          <ODSAccordion
            headerText="Filters"
            headingElement="h2"
            contentSlot={filtersContent}
            size="large"
          />
        </div>

        <scale-divider></scale-divider>

        <div className={styles.tileGrid}>
          {filtered.length === 0 ? (
            <div className={styles.emptyFill}>
              <div className={styles.emptyState}>
                <img src={noDataImg} alt="No results" />
                <h3>No results match your filters.</h3>
              </div>
            </div>
          ) : (
            filtered.map((s) => (
              <div key={s.id} className={clsx(styles.odscard__feature_content)}>
                <ODSCardFeature
                  id={s.symbol}
                  contentSlot={
                    <>
                      <ODSCardFeaturePreferredContent
                        productName={s.name}
                        productPrice={s.category + ' | ' + s.chips.join(', ')}
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
                  imageProps={{ src: s.icon ?? '#', alt: s.name }}
                  buttonProps={{ onClick: () => setOpen(s) }}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sleeve / detail panel */}
      {open && (
        <div
          className={styles.sleeveBackdrop}
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.sleeve} onClick={(e) => e.stopPropagation()}>
            <button className={styles.sleeveClose} aria-label="Close" onClick={() => setOpen(null)}>×</button>

            <br /><br />

            <div className={styles.sleeveHeader}>
              <div className={styles.sleeveSymbol}>{open.symbol}:</div>
              <div className={styles.sleeveTitle}>{open.name}</div>
            </div>

            <div className={styles.sleeveBody}>
              {open.description?.trim() ? open.description : "No description available."}
            </div>

            {open.category === "Finance Services" || open.category === "Sites" ? (
              <div className={styles.sleeveFooterSingle}>
                <ODSButton
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
      )}
    </div>
  );
}