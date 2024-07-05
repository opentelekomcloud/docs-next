---
id: multi-region
title: Design your application with static subnets in multiple regions 
---

# Design your application with static subnets in multiple regions 
The following tutorial describes how to design an application with one (global) private network spanning in two regions of Google Cloud. Each region has one subnet and one compute connecting to the subnet (e.g., `Compute` connects to `Subnet`, `Compute_2` connects to `Subnet_2`). The compute in the first region (e.g., `Compute`) has access to the internet.

[![../_images/multi-regions.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions.png)

Figure 1. Multiple subnets example

Design
----------------------------------------------

### Define a subnet for the network

*   Drop the **Subnet** component on the **Private** network.
    
[![../_images/subnet-step1.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step1.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step1.png)

Figure 2. Define a subnet

### Connect a compute to the subnet

*   Click on the network point (on the right side of the **Compute**) and connect it to the connection point of the **Subnet**.

[![../_images/subnet-step2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step2.png)

Figure 3. Connect a compute to the subnet

### Define a CIDR range for the subnet

*   Click on the **Subnet**.
*   Type `10.0.0.0/24` in the **cidr** field.
    
[![../_images/subnet-step3.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step3.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step3.png)

Figure 3. Define CIDR

:::note
The cidr field is mandatory for defining a subnet.
:::

### Define a fixed ip address for the compute (optional)

*   Click on the **Port** of the compute.
*   Type `10.0.0.3` in the **ip\_address** field. The ip\_address `10.0.0.3` is within the range of the network above (`10.0.0.0/24`).

[![../_images/subnet-step4.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step4.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step4.png)

Figure 4. Define fixed ip address

:::note
If no ip\_address specified, an ip address will be auto-generated within the ip range of the subnet during the deployment.
:::

### Define the second compute and subnet

*   Drop another **Subnet** component on the Private network. Now we have two subnets: `Subnet` and `Subnet_2`.
*   Click on the **Subnet\_2**. Type `10.0.1.0/24` in the **cidr** field.
*   Drop another **Compute** component (e.g., `Compute_2`) and connect it to **Subnet\_2**.

[![../_images/subnet-step5.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step5.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step5.png)

Figure 5. Define second subnet

### Connect the first compute to the public

*   Drop a **Public** network.
*   Connect the **Port** of `Compute` to the link point (on the left side) of the **Public** network.

[![../_images/subnet-step6.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step6.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step6.png)

Figure 6. Connect compute to public

Deploy
----------------------------------------------

1.  Go to **Deploy**.
2.  Choose the **Google** provider.
3.  In the **Configure cloud provider**:
4.  Choose the **zone** for the computes in **different regions** (e.g., `europe-north1-a` for `Compute` and `europe-west1-c` for `Compute_2`).
    

[![../_images/subnet-step7.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7.png)

Figure 7. Choose zone europe-north1-a for Compute

In summary, we have two computes with two subnets in two different regions:

[![../_images/subnet-step7b.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7b.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/subnet-step7b.png)

Figure 8. Two computes in two different regions europe-north1 and europe-west1

Expected result
----------------------------------------------------------------

*   The VPC `private` network is created with two subnets (e.g., `private-subnet` and `private-subnet-2`) in two cidr ranges (`10.0.0.0/24` and `10.0.1.0/24`) and in two regions (e.g., `europe-north1` and `europe-west1`), respectively.
    

[![../_images/multi-regions-result2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result2.png)

Figure 9. Two subnets are created

*   Two VMs will be created in the two separated subnets.
*   `Compute-0` has a fixed ip address `10.0.0.3` (as specified in step 4) and has an external IP.
    
[![../_images/multi-regions-result1.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result1.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/multi-regions-result1.png)

Figure 10. Two computes are created