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

export type OtcService = {
  id: string;
  symbol: string;
  name: string;
  category: OtcCategory;
  description: string;
  status?: "GA" | "Beta" | "Preview";
  url?: string;
  chips: Chip[]; // <-- chips live on the service itself
};

/* --------- Data (example) --------- */
const SERVICES: OtcService[] = [
  // Compute (IaaS)
  { id: "ecs", symbol: "ECS", name: "Elastic Cloud Server", category: "Compute", description: "Virtual machines for general compute workloads.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/compute/elastic-cloud-server", chips: ["IaaS"] },
  { id: "bms", symbol: "BMS", name: "Bare Metal Server", category: "Compute", description: "Dedicated, single-tenant physical servers.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/compute/bare-metal-server", chips: ["IaaS"] },
  { id: "as",  symbol: "AS",  name: "Auto Scaling", category: "Compute", description: "Automatic capacity right-sizing for ECS fleets.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/compute/auto-scaling", chips: ["IaaS"] },

  // Storage (IaaS)
  { id: "obs", symbol: "OBS", name: "Object Storage Service", category: "Storage", description: "S3-compatible object storage for any scale.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/storage/object-storage-service", chips: ["IaaS"] },
  { id: "evs", symbol: "EVS", name: "Elastic Volume Service", category: "Storage", description: "Block storage for ECS/BMS.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/storage/elastic-volume-service", chips: ["IaaS"] },
  { id: "sfs", symbol: "SFS", name: "Scalable File Service", category: "Storage", description: "Managed, elastic NFS file shares.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/storage/scalable-file-service", chips: ["IaaS"] },

  // Networking (IaaS) (+ some also Security)
  { id: "vpc", symbol: "VPC", name: "Virtual Private Cloud", category: "Networking", description: "Private networks, subnets, routing, security groups.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/networking/virtual-private-cloud", chips: ["IaaS", "Security"] },
  { id: "elb", symbol: "ELB", name: "Elastic Load Balancer", category: "Networking", description: "Distribute traffic across instances.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/networking/elastic-load-balancer", chips: ["IaaS", "Security"] },
  { id: "nat", symbol: "NAT", name: "NAT Gateway", category: "Networking", description: "Outbound internet for private subnets.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/networking/nat-gateway", chips: ["IaaS", "Security"] },
  { id: "dns", symbol: "DNS", name: "Domain Name Service", category: "Networking", description: "Authoritative and private DNS zones.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/networking/dns-service", chips: ["IaaS", "Security"] },

  // Database (PaaS)
  { id: "rds", symbol: "RDS", name: "Relational Database Service", category: "Database", description: "Managed MySQL, PostgreSQL, etc.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/database/relational-database-service", chips: ["PaaS"] },
  { id: "dws", symbol: "DWS", name: "Data Warehouse Service", category: "Database", description: "MPP analytics at petabyte scale.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/database/data-warehouse-service", chips: ["PaaS"] },
  { id: "dds", symbol: "DDS", name: "Distributed Database Service", category: "Database", description: "Managed document DB.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/database/distributed-database-service", chips: ["PaaS"] },

  // AI & Big Data (PaaS)
  { id: "ma",  symbol: "MA",  name: "ModelArts", category: "AI & Big Data", description: "End-to-end ML platform.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/ai/modelarts", chips: ["PaaS"] },
  { id: "mrs", symbol: "MRS", name: "MapReduce Service", category: "AI & Big Data", description: "Managed Hadoop/Spark.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/big-data/mapreduce-service", chips: ["PaaS"] },

  // Security (Security)
  { id: "kms", symbol: "KMS", name: "Key Management Service", category: "Security", description: "HSM-backed encryption keys.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/security/key-management-service", chips: ["Security"] },
  { id: "waf", symbol: "WAF", name: "Web Application Firewall", category: "Security", description: "Protect web apps from exploits.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/security/web-application-firewall", chips: ["Security"] },
  { id: "ad",  symbol: "AD",  name: "Anti-DDoS", category: "Security", description: "DDoS detection and mitigation.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/security/anti-ddos", chips: ["Security"] },

  // Containers & DevOps (PaaS)
  { id: "cce", symbol: "CCE", name: "Cloud Container Engine", category: "Containers & DevOps", description: "Managed Kubernetes.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/containers/cloud-container-engine", chips: ["PaaS"] },
  { id: "cci", symbol: "CCI", name: "Cloud Container Instance", category: "Containers & DevOps", description: "Serverless containers.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/containers/cloud-container-instance", chips: ["PaaS"] },
  { id: "sst", symbol: "SST", name: "ServiceStage", category: "Containers & DevOps", description: "App platform & CI/CD.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/devtools/servicestage", chips: ["PaaS"] },

  // Management (Management)
  { id: "ces", symbol: "CES", name: "Cloud Eye", category: "Management", description: "Monitoring, metrics, alarms.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/management/ces", chips: ["Management"] },
  { id: "cts", symbol: "CTS", name: "Cloud Trace Service", category: "Management", description: "Audit trails for API ops.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/management/cloud-trace-service", chips: ["Management"] },
  { id: "smn", symbol: "SMN", name: "Simple Message Notification", category: "Management", description: "Pub/Sub style notifications.", status: "GA", url: "https://open-telekom-cloud.com/en/products-services/application/smn", chips: ["Management", "PaaS"] }, // example in 2 chips
];

/* fixed columns — always render all of them so nothing disappears */
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

function cx(...arr: (string | false | null | undefined)[]) {
  return arr.filter(Boolean).join(" ");
}

export default function OtcServicesColumns() {
  const [query, setQuery] = useState("");
  const [chips, setChips] = useState<Set<Chip>>(new Set()); // multi-select; OR

  const toggleChip = (c: Chip) => {
    setChips((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  // Text + chips (chips are ORed: match any selected chip)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const mq =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.symbol.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);

      if (!mq) return false;
      if (chips.size === 0) return true;

      return s.chips?.some((ch) => chips.has(ch)); // OR
    });
  }, [query, chips]);

  // Seed all columns so empty ones show their placeholder
  const byCategory = useMemo(() => {
    const map = new Map<OtcCategory, OtcService[]>();
    ALL_CATS.forEach((c) => map.set(c, []));
    filtered.forEach((s) => map.set(s.category, [...(map.get(s.category) || []), s]));
    map.forEach((list, c) => map.set(c, [...list].sort((a, b) => a.name.localeCompare(b.name))));
    return map;
  }, [filtered]);

  function onTileKey(e: KeyboardEvent<HTMLDivElement>, url?: string) {
    if (!url) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }

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

        {/* Chips */}
        <div className={styles.buckets}>
          <button
            className={styles.chip}
            onClick={() => setChips(new Set())}
            aria-pressed={chips.size === 0}
            title="Clear filters"
          >
            All
          </button>
          {(["IaaS", "PaaS", "Security", "Management"] as Chip[]).map((c) => (
            <button
              key={c}
              className={cx(styles.chip, chips.has(c) && styles.chipActive)}
              onClick={() => toggleChip(c)}
              aria-pressed={chips.has(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Columns (fixed width; wrap; never removed) */}
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
                          <div className={styles.cat}>{s.category}</div>
                          {s.status && <span className={styles.badge}>{s.status}</span>}
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
