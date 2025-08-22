import React, { useMemo, useState, KeyboardEvent } from "react";
import { Search, Columns3, ExternalLink } from "lucide-react";
import styles from "./styles.module.css";

export type OtcCategory =
  | "Compute"
  | "Storage"
  | "Networking"
  | "Database"
  | "AI & Big Data"
  | "Security"
  | "Containers & DevOps"
  | "Management";

export type Chip = "IaaS" | "PaaS" | "Security" | "Management";
export type Region = "eu-de" | "eu-nl" | "eu-ch" | "global";

export type OtcService = {
  id: string;
  symbol: string;
  name: string;
  category: OtcCategory;
  description: string;
  url?: string;
  chips: Chip[];     // capabilities this service belongs to
  regions: Region[]; // regions available (["global"] is exclusive)
};

/* ---------- Sample data (adjust/extend freely) ---------- */
const SERVICES: OtcService[] = [
  // Compute (IaaS)
  { id: "ecs", symbol: "ECS", name: "Elastic Cloud Server", category: "Compute", description: "Virtual machines for general compute workloads.", url: "https://open-telekom-cloud.com/en/products-services/compute/elastic-cloud-server", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "bms", symbol: "BMS", name: "Bare Metal Server", category: "Compute", description: "Dedicated, single-tenant physical servers.", url: "https://open-telekom-cloud.com/en/products-services/compute/bare-metal-server", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "as",  symbol: "AS",  name: "Auto Scaling", category: "Compute", description: "Automatic capacity right-sizing for ECS fleets.", url: "https://open-telekom-cloud.com/en/products-services/compute/auto-scaling", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Storage (IaaS)
  { id: "obs", symbol: "OBS", name: "Object Storage Service", category: "Storage", description: "S3-compatible object storage for any scale.", url: "https://open-telekom-cloud.com/en/products-services/storage/object-storage-service", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "evs", symbol: "EVS", name: "Elastic Volume Service", category: "Storage", description: "Block storage for ECS/BMS.", url: "https://open-telekom-cloud.com/en/products-services/storage/elastic-volume-service", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "sfs", symbol: "SFS", name: "Scalable File Service", category: "Storage", description: "Managed, elastic NFS file shares.", url: "https://open-telekom-cloud.com/en/products-services/storage/scalable-file-service", chips: ["IaaS"], regions: ["eu-de"] },

  // Networking (IaaS + Security)
  { id: "vpc", symbol: "VPC", name: "Virtual Private Cloud", category: "Networking", description: "Private networks, subnets, routing, security groups.", url: "https://open-telekom-cloud.com/en/products-services/networking/virtual-private-cloud", chips: ["IaaS", "Security"], regions: ["eu-de", "eu-nl"] },
  { id: "elb", symbol: "ELB", name: "Elastic Load Balancer", category: "Networking", description: "Distribute traffic across instances.", url: "https://open-telekom-cloud.com/en/products-services/networking/elastic-load-balancer", chips: ["IaaS", "Security"], regions: ["eu-de"] },
  { id: "nat", symbol: "NAT", name: "NAT Gateway", category: "Networking", description: "Outbound internet for private subnets.", url: "https://open-telekom-cloud.com/en/products-services/networking/nat-gateway", chips: ["IaaS", "Security"], regions: ["eu-de", "eu-ch"] },
  { id: "dns", symbol: "DNS", name: "Domain Name Service", category: "Networking", description: "Authoritative and private DNS zones.", url: "https://open-telekom-cloud.com/en/products-services/networking/dns-service", chips: ["IaaS", "Security"], regions: ["global"] },

  // Database (PaaS)
  { id: "rds", symbol: "RDS", name: "Relational Database Service", category: "Database", description: "Managed MySQL, PostgreSQL, etc.", url: "https://open-telekom-cloud.com/en/products-services/database/relational-database-service", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "dws", symbol: "DWS", name: "Data Warehouse Service", category: "Database", description: "MPP analytics at petabyte scale.", url: "https://open-telekom-cloud.com/en/products-services/database/data-warehouse-service", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "dds", symbol: "DDS", name: "Distributed Database Service", category: "Database", description: "Managed document DB.", url: "https://open-telekom-cloud.com/en/products-services/database/distributed-database-service", chips: ["PaaS"], regions: ["eu-nl", "eu-ch"] },

  // AI & Big Data (PaaS)
  { id: "ma",  symbol: "MA",  name: "ModelArts", category: "AI & Big Data", description: "End-to-end ML platform.", url: "https://open-telekom-cloud.com/en/products-services/ai/modelarts", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "mrs", symbol: "MRS", name: "MapReduce Service", category: "AI & Big Data", description: "Managed Hadoop/Spark.", url: "https://open-telekom-cloud.com/en/products-services/big-data/mapreduce-service", chips: ["PaaS"], regions: ["eu-de"] },

  // Security
  { id: "kms", symbol: "KMS", name: "Key Management Service", category: "Security", description: "HSM-backed encryption keys.", url: "https://open-telekom-cloud.com/en/products-services/security/key-management-service", chips: ["Security"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "waf", symbol: "WAF", name: "Web Application Firewall", category: "Security", description: "Protect web apps from exploits.", url: "https://open-telekom-cloud.com/en/products-services/security/web-application-firewall", chips: ["Security"], regions: ["eu-de", "eu-nl"] },
  { id: "ad",  symbol: "AD",  name: "Anti-DDoS", category: "Security", description: "DDoS detection and mitigation.", url: "https://open-telekom-cloud.com/en/products-services/security/anti-ddos", chips: ["Security"], regions: ["global"] },

  // Containers & DevOps (PaaS)
  { id: "cce", symbol: "CCE", name: "Cloud Container Engine", category: "Containers & DevOps", description: "Managed Kubernetes.", url: "https://open-telekom-cloud.com/en/products-services/containers/cloud-container-engine", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "cci", symbol: "CCI", name: "Cloud Container Instance", category: "Containers & DevOps", description: "Serverless containers.", url: "https://open-telekom-cloud.com/en/products-services/containers/cloud-container-instance", chips: ["PaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "sst", symbol: "SST", name: "ServiceStage", category: "Containers & DevOps", description: "App platform & CI/CD.", url: "https://open-telekom-cloud.com/en/products-services/devtools/servicestage", chips: ["PaaS"], regions: ["eu-de"] },

  // Management
  { id: "ces", symbol: "CES", name: "Cloud Eye", category: "Management", description: "Monitoring, metrics, alarms.", url: "https://open-telekom-cloud.com/en/products-services/management/ces", chips: ["Management"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "cts", symbol: "CTS", name: "Cloud Trace Service", category: "Management", description: "Audit trails for API ops.", url: "https://open-telekom-cloud.com/en/products-services/management/cloud-trace-service", chips: ["Management"], regions: ["eu-de"] },
  { id: "smn", symbol: "SMN", name: "Simple Message Notification", category: "Management", description: "Pub/Sub style notifications.", url: "https://open-telekom-cloud.com/en/products-services/application/smn", chips: ["Management", "PaaS"], regions: ["eu-nl"] },
];

/* fixed columns — always render all of them */
const ALL_CATS: OtcCategory[] = [
  "Compute",
  "Storage",
  "Networking",
  "Database",
  "AI & Big Data",
  "Security",
  "Containers & DevOps",
  "Management",
];

const REGION_ORDER: Region[] = ["eu-de", "eu-nl", "eu-ch", "global"];

function cx(...arr: (string | false | null | undefined)[]) {
  return arr.filter(Boolean).join(" ");
}

const regionEmoji: Record<Exclude<Region, "global">, string> = {
  "eu-de": "🇩🇪",
  "eu-nl": "🇳🇱",
  "eu-ch": "🇨🇭",
};

// helper to render the chips text (fallback to category)
const chipLabel = (chips: Chip[], fallback = "") =>
  chips && chips.length ? chips.join(" · ") : fallback;

export default function OtcServicesColumns() {
  const [query, setQuery] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set());            // OR
  const [regionsSel, setRegionsSel] = useState<Set<Region>>(new Set()); // OR

  const toggleChip = (c: Chip) =>
    setChips((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });

  const toggleRegion = (r: Region) =>
    setRegionsSel((prev) => {
      const next = new Set(prev);
      next.has(r) ? next.delete(r) : next.add(r);
      return next;
    });

  // text + chips(OR) + regions(OR)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const mq =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.symbol.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      if (!mq) return false;

      if (chips.size > 0 && !s.chips.some((c) => chips.has(c))) return false;
      if (regionsSel.size > 0 && !s.regions.some((r) => regionsSel.has(r))) return false;

      return true;
    });
  }, [query, chips, regionsSel]);

  // seed all columns to keep empty columns visible
  const byCategory = useMemo(() => {
    const map = new Map<OtcCategory, OtcService[]>();
    ALL_CATS.forEach((c) => map.set(c, []));
    filtered.forEach((s) =>
      map.set(s.category, [...(map.get(s.category) || []), s])
    );
    map.forEach((list, c) =>
      map.set(c, [...list].sort((a, b) => a.name.localeCompare(b.name)))
    );
    return map;
  }, [filtered]);

  function onTileKey(e: KeyboardEvent<HTMLDivElement>, url?: string) {
    if (!url) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }

  const isChipActive = (c: Chip) => chips.has(c);
  const isRegionActive = (r: Region) => regionsSel.has(r);

  const renderRegionBadge = (regions: Region[]) => {
    if (regions.includes("global")) {
      return <span className={styles.badge}>GLOBAL</span>;
    }
    const ordered = REGION_ORDER.filter(
      (r) => r !== "global" && regions.includes(r)
    ) as Exclude<Region, "global">[];
    return (
      <span className={styles.badge}>
        {ordered.map((r) => regionEmoji[r]).join(" ")}
      </span>
    );
  };

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <h1>Open Telekom Cloud — Services</h1>
            <p>Columns view (fixed width, no horizontal scroll). Empty columns stay visible.</p>
          </div>

          <div className={styles.ctrls}>
            <div className={styles.search}>
              <Search className={styles.searchIcon} size={16} aria-hidden />
              <input
                aria-label="Search services"
                placeholder="Search by name, symbol, or category"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className={styles.viewchip}>
              <Columns3 size={16} /> Columns
            </div>
          </div>
        </div>

        {/* Capability chips */}
        <div className={styles.buckets}>
          <button
            className={styles.chip}
            onClick={() => setChips(new Set())}
            aria-pressed={chips.size === 0}
            title="Clear capability filters"
          >
            All
          </button>
          {(["IaaS", "PaaS", "Security", "Management"] as Chip[]).map((c) => (
            <button
              key={c}
              className={cx(styles.chip, isChipActive(c) && styles.chipActive)}
              onClick={() => toggleChip(c)}
              aria-pressed={isChipActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Region chips */}
        <div className={styles.buckets}>
          <button
            className={styles.chip}
            onClick={() => setRegionsSel(new Set())}
            aria-pressed={regionsSel.size === 0}
            title="Clear region filters"
          >
            Regions: All
          </button>
          {(["eu-de", "eu-nl", "eu-ch", "global"] as Region[]).map((r) => (
            <button
              key={r}
              className={cx(styles.chip, isRegionActive(r) && styles.chipActive)}
              onClick={() => toggleRegion(r)}
              aria-pressed={isRegionActive(r)}
              title={r.toUpperCase()}
            >
              {r === "global"
                ? "GLOBAL"
                : r === "eu-de"
                ? "🇩🇪 EU-DE"
                : r === "eu-nl"
                ? "🇳🇱 EU-NL"
                : "🇨🇭 EU-CH"}
            </button>
          ))}
        </div>

        {/* Columns (fixed width; wrap) */}
        <div className={styles.columns}>
          {ALL_CATS.map((cat) => {
            const items = byCategory.get(cat) || [];
            return (
              <section key={cat} className={styles.col} data-cat={cat}>
                <header className={styles.colHead}>
                  <div className={styles.colTitle}>{cat}</div>
                </header>
                <div className={styles.colBody}>
                  {items.length === 0 ? (
                    <div className={styles.empty}>No matches</div>
                  ) : (
                    items.map((s) => (
                      <div
                        key={s.id}
                        className={styles.tile}
                        onClick={() => s.url && window.open(s.url, "_blank")}
                        onKeyDown={(e) => onTileKey(e, s.url)}
                        role="button"
                        tabIndex={0}
                        data-tooltip={s.description}
                        data-cat={s.category}
                        aria-label={`${s.name} (${s.symbol}) — ${s.description}`}
                      >
                        <div className={styles.tileTop}>
                          {/* LEFT: chips instead of category */}
                          <div className={styles.cat}>{chipLabel(s.chips, s.category)}</div>
                          {/* RIGHT: region badge(s) */}
                          {renderRegionBadge(s.regions)}
                        </div>
                        <div className={styles.symbol}>{s.symbol}</div>
                        <div className={styles.tileBottom}>
                          <div className={styles.name} title={s.name}>
                            {s.name}
                          </div>
                          <ExternalLink size={16} className={styles.ext} aria-hidden />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
