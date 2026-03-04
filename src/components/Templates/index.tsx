import React, { useMemo, useState, useCallback } from "react";
import styles from "./styles.module.css";
import TemplateCard from "./TemplateCard";
import { TemplatesList } from "./TemplatesList";
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ODSButton, ODSChipSet, ODSToggleChip } from '@telekom-ods/react-ui-kit';

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

    const resetFilters = useCallback(() => {
        setActiveTypes(new Set());
    }, []);

    const filteredTemplates = useMemo(() => {
        let templates = activeTypes.size === 0 ? TemplatesList : TemplatesList.filter((tpl) => {
            const tplTypes = splitTemplateTypes(tpl.type);
            return Array.from(activeTypes).some(t => tplTypes.includes(t));
        });

        // Deduplicate by id/link
        const seen = new Set();
        return templates.filter(tpl => {
            const key = tpl.id || tpl.link;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }, [activeTypes]);

    return (
        <div>
            <div className={styles.filtersRow}>
                <span className={styles.filtersLabel}>Filter by type:</span>

                <ODSChipSet aria-label="template type filters">
                    {FILTERS.map(({ label, value }) => {
                        const isActive = activeTypes.has(value);

                        return (
                            <ODSToggleChip
                                key={value}
                                label={label}
                                selected={isActive}
                                onClick={() => toggleType(value)}
                            />
                        );
                    })}
                </ODSChipSet>

                <ODSButton
                    className={styles.resetBtn}
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

            <scale-divider></scale-divider>

            {filteredTemplates.length === 0 ? (
                <div className={styles.emptyFill}>
                    <div className={styles.emptyState}>
                        <img src={noDataImg} />
                        <h3>No results match your filters.</h3>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {filteredTemplates.map((tpl, idx) => (
                        <div key={tpl.id ?? tpl.link ?? `${tpl.title}-${tpl.partner ?? "n/a"}-${idx}`} className="col col--4 margin-bottom--lg ">
                            <TemplateCard
                                title={tpl.title}
                                logo={tpl.logo}
                                description={tpl.description}
                                type={tpl.type}
                                link={tpl.link}
                                partner={tpl.partner}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
