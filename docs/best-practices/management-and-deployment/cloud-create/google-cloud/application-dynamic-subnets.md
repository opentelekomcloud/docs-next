---
id: application-dynamic-subnets
title: Design with dynamic subnets
tags: [multi-cloud, google, gcp, cloud-create]
---

# Design with dynamic subnets
The Section [Design your application with static subnets in multiple regions](https://docs.otc.t-systems.com/cloud-create/umn/google/multi_regions.html#google-static-subnets) shows how to define multiple subnets for a network **explicitly**. However, users may not want to define the subnets explicitly. In such a case, the Cloud Create will auto-generate one subnet for each region dynamically as follows:

Design
-------------------------------------------------------------

*   Design an application with two computes connecting to the same `Private` network. The Private network has no subnets.
*   Click on the `Private` network and specify the **cidr**: `10.0.0.0/24`.
*   Connect the first compute (e.g., `Compute`) to the `Public` network.
    

[![../_images/auto-subnets.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets.png)

Figure 1. Auto-generated subnet example

Deploy
-------------------------------------------------------------

### Case 1. Two computes in the same region

1.  Go to **Deploy** / **Google** / **Configure cloud provider**.
2.  Choose the **zone** for the two computes in the **same region** `europe-west1` (e.g., choose `europe-west1-b` and `europe-west1-c` for `Compute` and `Compute_2`, respectively).
    

#### Expected result

*   Google Cloud requires one region has at least one subnet. The designer auto-generates one subnet `Private_subnet_europe_west1` for the region `europe-west1` in the `Private` network.
*   The subnet has the **same cidr** of the `Private` network (i.e., `10.0.0.0/24`).
*   Both computes `Compute` and `Compute-2` connect to this subnet.
    

[![../_images/auto-subnets2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets2.png)

Figure 2. Private\_subnet\_europe\_west1 is auto-generated for two computes in one region

*   The `routing_mode` of the `Private` network is auto set to `REGIONAL` (if not set) since all computes are in the same region.
    
[![../_images/auto-subnets-result1b.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result1b.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result1b.png)

Figure 3. The routing\_mode is auto set to REGIONAL

### Case 2. Two computes in different regions

1.  Go to **Deploy** / **Google** / **Configure cloud provider**.
2.  Choose the **zone** for the computes in **two different regions** (e.g., choose the zone `europe-north1-a` and `europe-west1-c` for `Compute` and `Compute_2`, respectively).
    
#### Expected result

*   Google Cloud requires one region has at least one subnet. Because we have two regions, the designer auto-generates two subnets for the region `europe-north1` and `europe-west1`.
*   The cidr of the `Private` network (i.e., `10.0.0.0/24`) is **auto subnetting** in two **equal ranges** for each subnet (i.e., `10.0.0.0/25` and `10.0.0.128/25`).
*   Two computes connect to two separated subnets in different regions.
    
[![../_images/auto-subnets-result2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2.png)

Figure 4. Two subnets are auto-generated for two regions

*   The `routing_mode` of the `Private` network is auto set to `GLOBAL` (if not set) so that the two computes from different regions can access each other via the internal IP address.
    
[![../_images/auto-subnets-result2b.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2b.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/auto-subnets-result2b.png)

Figure 5. The routing\_mode is auto set to GLOBAL

:::tip
Auto-generated subnet is useful if you cannot decide the location of the computes at the design time (i.e., whether the computes are co-located in one or in different regions) but at the deployment time. In such a case, Cloud Create will transform the topology before the deployment for you.
:::