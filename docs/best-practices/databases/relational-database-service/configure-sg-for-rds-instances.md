---
id: configure-sg-for-rds-instances
title: Configure Security Groups for PostgreSQL RDS Instances and Clients
tags: [rds, security-group, sg]
---

# Configure Security Groups for PostgreSQL RDS Instances and Clients

Two distinct Security Groups will be required for every RDS setup. The first will be assigned to the RDS instance/nodes, and must allow inbound traffic on port `5432`, which is the default PostgreSQL port. If both the RDS and client nodes are deployed **within the same Subnet**, this rule can be restricted to that Subnet’s IP range for tighter control. This ensures that only internal workloads—such can initiate connections to the database, minimizing exposure and adhering to the principle of least privilege.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-fh3.png)

The second Security Group will be assigned to the client nodes. This group must allow outbound traffic on port `5432` to reach the RDS instance. By explicitly controlling egress rules, you can enforce that only authorized services within your environment (CCE, ECS etc.) can initiate connections to the database, maintaining a secure and auditable network flow between components.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231208-k2x.png)

<!-- :::info Next Steps

- [Configure Security Groups for CCE Nodes](/docs/best-practices/databases/relational-database-service/configure-sg-for-cce-nodes.md)

::: -->
