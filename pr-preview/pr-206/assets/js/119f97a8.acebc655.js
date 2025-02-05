"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[19203],{84995:e=>{e.exports=JSON.parse('{"tag":{"label":"elb","permalink":"/docs-next/pr-preview/pr-206/docs/tags/elb","allTagsPath":"/docs-next/pr-preview/pr-206/docs/tags","count":5,"items":[{"id":"best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics","title":"Auto Scaling Based on ELB Monitoring Metrics","description":"By default, Kubernetes scales a workload based on resource usage metrics such as CPU and memory. However, this mechanism cannot reflect the real-time resource usage when traffic bursts arrive, because the collected CPU and memory usage data lags behind the actual load balancer traffic metrics. For some services (such as flash sale and social media) that require fast auto scaling, scaling based on this rule may not be performed in a timely manner and cannot meet these services\' actual needs. In this case, auto scaling based on ELB QPS data can respond to service requirements more timely.","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/containers/cloud-container-engine/auto-scaling-based-on-elb-monitoring-metrics"},{"id":"best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer","title":"Routing Traffic to Backend Servers in Different VPCs from the Load Balancer","description":"You can use ELB to route traffic to backend servers in two VPCs connected over a VPC peering connection.","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-different-vpcs-from-the-load-balancer"},{"id":"best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer","title":"Routing Traffic to Backend Servers in the Same VPC as the Load Balancer","description":"You can route traffic to backend servers in the VPC where the load balancer is running.","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/networking/elastic-load-balancing/routing-traffic-to-backend-servers-in-the-same-vpc-as-the-load-balancer"},{"id":"best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration","title":"Using Advanced Forwarding for Application Iteration","description":"As the business grows, you may need to upgrade your application. Both the old and new versions are used. Now, the new version is optimized based on users\' feedback, and you want all the users to use the new version. In this process, you can use advanced forwarding to route requests to different versions.","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/networking/elastic-load-balancing/using-advanced-forwarding-for-application-iteration"},{"id":"best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs","title":"Using ELB for Public Access to DCS","description":"Currently, DCS Redis 4.0, 5.0, and 6.0 instances cannot be bound with elastic IP addresses (EIPs) and cannot be accessed over public networks directly. This section describes how to access a single-node, master/standby, read/write splitting, or Proxy Cluster instance or a node in a Redis Cluster instance through public networks by enabling cross-VPC backend on a load balancer.","permalink":"/docs-next/pr-preview/pr-206/docs/best-practices/databases/distributed-cache-service/using-elb-for-public-access-to-dcs"}],"unlisted":false}}')}}]);