import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import TemplateCard from "./TemplateCard";
import { TemplatesList } from "./TemplatesList";
import useBaseUrl from '@docusaurus/useBaseUrl';

const FILTERS = [
    { label: "Ansible", value: "ansible" },
    { label: "Cloud Create", value: "cloud create" },
    { label: "Crossplane", value: "crossplane" },
    { label: "Terraform", value: "terraform" },
] as const;

type FilterType = (typeof FILTERS)[number]["value"];

const normalize = (v: string) => v.trim().toLowerCase();

function splitTemplateTypes(typeField?: string): string[] {
    return (typeField ?? "")
        .split(/[,/|]/g)
        .map(normalize)
        .filter(Boolean);
}

export default function Templates() {
    const [activeTypes, setActiveTypes] = useState<Set<FilterType>>(new Set());
    const noDataImg = useBaseUrl('/img/undraw_no-data_ig65.svg');

    const toggleType = (t: FilterType) => {
        setActiveTypes((prev) => {
            const next = new Set(prev);
            if (next.has(t)) {
                next.delete(t);
            } else {
                next.add(t);
            }
            return next;
        });
    };

    const onChipRowClickCapture = (e: React.MouseEvent) => {
        const host = (e.target as HTMLElement)?.closest("scale-chip") as HTMLElement | null;
        if (!host) return;

        const value = host.getAttribute("data-chip") as FilterType | null;
        if (!value) return;

        e.preventDefault();
        e.stopPropagation();
        toggleType(value);
    };

    const filteredTemplates = useMemo(() => {
        if (activeTypes.size === 0) return TemplatesList;

        return TemplatesList.filter((tpl) => {
            const tplTypes = splitTemplateTypes(tpl.type);
            for (const t of activeTypes) {
                if (tplTypes.includes(t)) return true;
            }
            return false;
        });
    }, [activeTypes]);

    return (
        <div>
            <div className={styles.filtersRow}>
                <span className={styles.filtersLabel}>Filter by type:</span>

                <div className={styles.chipsRow} onClickCapture={onChipRowClickCapture}>
                    {FILTERS.map(({ label, value }) => {
                        const isActive = activeTypes.has(value);
                        return (
                            <scale-chip
                                key={value}
                                data-chip={value}
                                size="small"
                                selected={isActive}
                            >
                                {label}
                            </scale-chip>
                        );
                    })}
                </div>

                    <scale-button
                        variant="secondary"
                        className={styles.resetBtn}
                        onClick={() => setActiveTypes(new Set())}
                    >
                        <scale-icon-action-refresh></scale-icon-action-refresh> Reset Filters
                    </scale-button>
            </div>

            <scale-divider></scale-divider>

            <div className={styles.grid}>
                {filteredTemplates.length === 0 ? (
                    <div className={styles.emptyFill}>
                        <div className={styles.emptyState}>
                            <img src={noDataImg} />
                            <h3>No results match your filters.</h3>
                        </div>
                    </div>

                ) : (
                    filteredTemplates.map((tpl) => (
                        <TemplateCard title={tpl.title} logo={tpl.logo} description={tpl.description} type={tpl.type} link={tpl.link} partner={tpl.partner} />
                    ))
                )}
            </div>
        </div>
    );
}
