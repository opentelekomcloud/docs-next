import React, { useMemo, useState, KeyboardEvent } from "react";
import { Search, Columns3, ExternalLink } from "lucide-react";
import styles from "./styles.module.css";

export type OtcCategory =
  | "Application"
  | "Data Analysis"
  | "Computing"
  | "Containers"
  | "Databases"
  | "Management & Deployment"
  | "Network"
  | "Security Services"
  | "Storage";


export type Chip = "IaaS" | "PaaS" | "Sec" | "Mgmt";
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
  // Application
  { id: "AOM", symbol: "AOM", name: "Application Operations Management", category: "Application", description: "Application Operations Management (AOM) is a one-stop, three-dimensional O&M management platform for cloud applications. It monitors your applications and related cloud resources in real time, collects and associates the data of resource metrics, logs, and events to analyze application health statuses, and provides flexible alarms and abundant data visualization functions. This helps you detect faults timely and master the real-time running statuses of applications, resources, and services.", url: "/docs/tags/aom", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "APIG", symbol: "APIG", name: "API Gateway (APIG)", category: "Application", description: "API Gateway (APIG) is a high-performance, high-availability, and high-security API hosting service that helps you build, manage, and deploy APIs at any scale. With just a few clicks, you can integrate internal systems, and selectively expose capabilities with minimal costs and risks.", url: "/docs/tags/apig", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "APM",  symbol: "APM",  name: "Application Performance Management", category: "Application", description: "The Application Performance Management (APM) monitors and manages the performance of cloud applications in real time. APM provides performance analysis of distributed applications, helping O&M personnel quickly locate and resolve faults and performance bottlenecks.", url: "/docs/tags/apm", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DMS",  symbol: "DMS",  name: "Distributed Message Service", category: "Application", description: "Distributed Message Service (DMS) is a message middleware service based on distributed, high-availability clustering technology. It provides reliable, scalable, and fully managed queues for storing messages.", url: "/docs/tags/dms", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "SMN",  symbol: "SMN",  name: "Simple Message Notification", category: "Application", description: "Simple Message Notification (SMN) is a hosted simple message notification service that is flexible and large-scale. SMN allows you to send messages to email addresses, and HTTP/HTTPS applications in an efficient and inexpensive way.", url: "/docs/tags/smn", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // "Data Analysis"
  { id: "CSS",  symbol: "CSS",  name: "Cloud Search Service", category: "Data Analysis", description: "", url: "/docs/tags/css", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "data-arts",  symbol: "DataArts Studio",  name: "Data Operations Platform", category: "Data Analysis", description: "", url: "/docs/tags/data-arts", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DLI",  symbol: "DLI",  name: "Data Lake Insight", category: "Data Analysis", description: "", url: "/docs/tags/DLI", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DWS",  symbol: "DWS",  name: "Data Warehouse Service", category: "Data Analysis", description: "", url: "/docs/tags/DWS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "ModelArts",  symbol: "ModelArts",  name: "Development Platform for AI", category: "Data Analysis", description: "", url: "/docs/tags/model-arts", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "MRS",  symbol: "MRS",  name: "MapReduce Service", category: "Data Analysis", description: "", url: "/docs/tags/MRS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "OCR",  symbol: "OCR",  name: "Optical Character Recognition", category: "Data Analysis", description: "", url: "/docs/tags/OCR", chips: ["PaaS"], regions: ["eu-de"] },
//   { id: "CSS",  symbol: "CSS",  name: "Cloud Search Service", category: "Data Analysis", description: "", url: "/docs/tags/css", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },

  // Computing
  { id: "AS",  symbol: "AS",  name: "Auto Scaling", category: "Computing", description: "", url: "/docs/tags/AS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "BMS",  symbol: "BMS",  name: "Bare Metal Services", category: "Computing", description: "", url: "/docs/tags/BMS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "DHS",  symbol: "DHS",  name: "Dedicated Host", category: "Computing", description: "", url: "/docs/tags/DHS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ECS",  symbol: "ECS",  name: "Elastic Cloud Server", category: "Computing", description: "", url: "/docs/tags/ECS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "FGS",  symbol: "FGS",  name: "FunctionGraph", category: "Computing", description: "", url: "/docs/tags/FGS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "IMS",  symbol: "IMS",  name: "Image Management Service", category: "Computing", description: "", url: "/docs/tags/IMS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Containers
  { id: "ASM",  symbol: "ASM",  name: "Application Service Mesh", category: "Containers", description: "", url: "/docs/tags/ASM", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "CCE",  symbol: "CCE",  name: "Cloud Container Engine", category: "Containers", description: "", url: "/docs/tags/CCE", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CCI",  symbol: "CCI",  name: "Serverless Container Engine", category: "Containers", description: "", url: "/docs/tags/CCI", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "SWR",  symbol: "SWR",  name: "Software Repository for Containers", category: "Containers", description: "", url: "/docs/tags/IMS", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Databases
  { id: "DCS",  symbol: "DCS",  name: "Distributed Cache Service", category: "Databases", description: "", url: "/docs/tags/DCS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DDM",  symbol: "DDM",  name: "Distributed Database Middleware", category: "Databases", description: "", url: "/docs/tags/DDM", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "DDS",  symbol: "DDS",  name: "Document Database Service", category: "Databases", description: "", url: "/docs/tags/DDS", chips: ["PaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "DRS",  symbol: "DRS",  name: "Data Replication Service", category: "Databases", description: "", url: "/docs/tags/DRS", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "GeminiDB",  symbol: "GeminiDB",  name: "Distributed, Multi-Model NoSQL Database Service", category: "Databases", description: "", url: "/docs/tags/gemini-db", chips: ["PaaS"], regions: ["eu-de"] },
  { id: "RDS",  symbol: "RDS",  name: "Relational Database Service", category: "Databases", description: "", url: "/docs/tags/RDS", chips: ["PaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "TaurusDB",  symbol: "TaurusDB",  name: "Enterprise-Class Distributed Database", category: "Databases", description: "", url: "/docs/tags/taurussb", chips: ["PaaS"], regions: ["eu-de"] },

  // Management & Deployment
  { id: "CloudCreate",  symbol: "Cloud Create",  name: "Multi-Cloud Management Platform", category: "Management & Deployment", description: "", url: "/docs/tags/cloud-create", chips: ["Mgmt"], regions: ["eu-de", "eu-ch"] },
  { id: "CloudEye",  symbol: "Cloud Eye",  name: "Multi-Dimensional Monitoring Platform", category: "Management & Deployment", description: "", url: "/docs/tags/CloudEye", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] }, 
  { id: "Config",  symbol: "Config",  name: "Continuously Evaluate Resource Configuration", category: "Management & Deployment", description: "", url: "/docs/tags/Config", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "CTS",  symbol: "CTS",  name: "Cloud Trace Service", category: "Management & Deployment", description: "", url: "/docs/tags/CTS", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "LTS",  symbol: "LTS",  name: "Log Tank Service", category: "Management & Deployment", description: "", url: "/docs/tags/LTS", chips: ["Mgmt"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "RMS",  symbol: "RMS",  name: "Resource Management Service", category: "Management & Deployment", description: "", url: "/docs/tags/RMS", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "RFS",  symbol: "RFS",  name: "Resource Formation Service", category: "Management & Deployment", description: "", url: "/docs/tags/RFS", chips: ["Mgmt"], regions: ["eu-de"] },
  { id: "TMS",  symbol: "TMS",  name: "Tag Management Service", category: "Management & Deployment", description: "", url: "/docs/tags/TMS", chips: ["Mgmt"], regions: ["eu-de", "eu-ch"] },

  // Network
  { id: "DirectConnect",  symbol: "Direct Connect",  name: "Dedicated Network Connection", category: "Network", description: "", url: "/docs/tags/direct-connect", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "DNS",  symbol: "DNS",  name: "Domain Name Service", category: "Network", description: "", url: "/docs/tags/DNS", chips: ["IaaS"], regions: ["eu-de", "eu-ch"] },
  { id: "EIP",  symbol: "EIP",  name: "Elastic IP", category: "Network", description: "", url: "/docs/tags/EIP", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "ELB",  symbol: "ELB",  name: "Elastic Load Balancing", category: "Network", description: "", url: "/docs/tags/ELB", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "EnterpriseRouter",  symbol: "Enterprise Router",  name: "Cloud Router Service", category: "Network", description: "", url: "/docs/tags/enterprise-router", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "NATGW",  symbol: "NATGW",  name: "NAT Gateway", category: "Network", description: "", url: "/docs/tags/NATGW", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "PLAS",  symbol: "PLAS",  name: "Private Link Access Service", category: "Network", description: "", url: "/docs/tags/PLAS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "smg",  symbol: "SMG",  name: "Secure Mail Gateway", category: "Network", description: "", url: "/docs/tags/smg", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "VPC",  symbol: "VPC",  name: "Virtual Private Cloud", category: "Network", description: "", url: "/docs/tags/VPC", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPCEP",  symbol: "VPCEP",  name: "Virtual Private Cloud Endpoint", category: "Network", description: "", url: "/docs/tags/VPCEP", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "VPN",  symbol: "VPN",  name: "Virtual Private Network", category: "Network", description: "", url: "/docs/tags/VPN", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Security Services
  { id: "Anti-DDoS",  symbol: "Anti-DDoS",  name: "Anti-DDoS Traffic Cleaning Service", category: "Security Services", description: "", url: "/docs/tags/Anti-DDoS", chips: ["Sec"], regions: ["eu-de", "eu-nl"] },
  { id: "CFW",  symbol: "CFW",  name: "Cloud Firewall", category: "Security Services", description: "", url: "/docs/tags/CFW", chips: ["Sec"], regions: ["eu-de"] },
  { id: "DDS",  symbol: "DDS",  name: "Database Security Service", category: "Security Services", description: "", url: "/docs/tags/DDS", chips: ["Sec"], regions: ["eu-de"] },
  { id: "HSS",  symbol: "HSS",  name: "Host Security Service", category: "Security Services", description: "", url: "/docs/tags/HSS", chips: ["Sec"], regions: ["eu-de"] },
  { id: "IAM",  symbol: "IAM",  name: "Identity & Access Management", category: "Security Services", description: "", url: "/docs/tags/IAM", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "KMS",  symbol: "KMS",  name: "Key Management Service", category: "Security Services", description: "", url: "/docs/tags/KMS", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "WAF",  symbol: "WAF",  name: "Web Application Firewall", category: "Security Services", description: "", url: "/docs/tags/WAF", chips: ["Sec"], regions: ["eu-de", "eu-nl"] },
  { id: "DedicatedWAF",  symbol: "Dedicated WAF",  name: "Dedicated Web Application Firewall", category: "Security Services", description: "", url: "/docs/tags/dedicated-waf", chips: ["Sec"], regions: ["eu-de", "eu-nl", "eu-ch"] },

  // Storage
  { id: "CBR",  symbol: "CBR",  name: "Cloud Backup & Recovery", category: "Storage", description: "", url: "/docs/tags/CBR", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "CSBS",  symbol: "CSBS",  name: "Cloud Server Backup Service", category: "Storage", description: "", url: "/docs/tags/CSBS", chips: ["IaaS"], regions: ["eu-de"] },
  { id: "EVS",  symbol: "EVS",  name: "Elastic Volume Service", category: "Storage", description: "", url: "/docs/tags/EVS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "OBS",  symbol: "OBS",  name: "Object Storage Service", category: "Storage", description: "", url: "/docs/tags/OBS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SDRS",  symbol: "SDRS",  name: "Storage Disaster Recovery Service", category: "Storage", description: "", url: "/docs/tags/SDRS", chips: ["IaaS"], regions: ["eu-de", "eu-nl", "eu-ch"] },
  { id: "SFS",  symbol: "SFS",  name: "Scalable File Service", category: "Storage", description: "", url: "/docs/tags/SFS", chips: ["IaaS"], regions: ["eu-de", "eu-nl"] },
  { id: "VBS",  symbol: "VBS",  name: "Volume Backup Service", category: "Storage", description: "", url: "/docs/tags/VBS", chips: ["IaaS"], regions: ["eu-de"] },

];

/* fixed columns — always render all of them */
const ALL_CATS: OtcCategory[] = [
  "Application",
  "Data Analysis",
  "Computing",
  "Containers",
  "Databases",
  "Management & Deployment",
  "Network",
  "Security Services",
  "Storage",
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
      <span className={styles.flags}>
        {ordered.map((r) => regionEmoji[r]).join(" ")}
      </span>
    );
  };

  return (
    <div className={styles.otcWrap}>
      <div className={styles.otcMax}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            {/* <h1>Open Telekom Cloud — Services</h1>
            <p>Columns view (fixed width, no horizontal scroll). Empty columns stay visible.</p> */}
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
          {(["IaaS", "PaaS", "Sec", "Mgmt"] as Chip[]).map((c) => (
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
                    <div className={styles.empty}>N/A</div>
                  ) : (
                    items.map((s) => (
                      <div
                        key={s.id}
                        className={styles.tile}
                        onClick={() => s.url && window.open(s.url, "_blank")}
                        onKeyDown={(e) => onTileKey(e, s.url)}
                        role="button"
                        tabIndex={0}
                        // data-tooltip={s.description}
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
