---
id: fiber-factory
title: "Fiber-Factory: Accelerated Grid Expansion"
tags: [telecommunications, by-industry]
---

# Fiber-Factory: Accelerated Grid Expansion

More than 33 million households in Germany can access speeds of over 50 MBit/s, thanks to Telekom's fiber optic expansion. This enables people to work from home, streaming, and business line connectivity. Now Telekom is planning to expand the network for up to two million more households each year starting in 2021. This involved extensive construction measures. In order to plan these more efficiently, secure resources from the Open Telekom Cloud are providing support.

## Benefits for the Customer

* Faster calculation of potential routes for fiber optic expansion with time savings of up to 75 percent
* Automation of the entire planning process
* Greater transparency around the duration and costs of the expansion
* Nationwide standardized procedure
* Accelerated authorization procedures

### High Degree of Automation

Several thousand planners from Fiber Factory, a division of Deutsche Telekom Technik GmbH, are responsible for the planning of up to two million new fiber optic connections nationwide per year. Until now, planning required a lot of time and manual effort, and was therefore prone to errors. Deutsche Telekom Technik GmbH was looking for a highly automated and standardized solution for efficient, cost-effective planning. "*Our ambitious schedule calls for us to bring 15 times more fiber to the home connections online each year than we have in the past. This cannot be achieved without automated processes,*" says Niko Gitzen, Senior Expert at Fiber Factory.

### AI-Based Process Optimizes Calculation

In order to position new routes in an optimal fashion, DT Technik GmbH works with a geodata infrastructure (GDI) that incorporates data from cadastres, aerial photographs and images of the expansion area from the T-Surface Car. The customer can flexibly use IT resources from the Open Telekom Cloud for the operation of the GDI, the processing of the large volumes of data and the rapid creation of new expansion plans. "*We operate our geodata infrastructure in Deutsche Telekom's public cloud solution. We prepare and process all the data collected from the T-Surface Cars and link it to other information there. The results form the basis for the planning process of the fiber optic expansion,*" says Tobias Frechen, System Architect at Deutsche Telekom IT GmbH.

## The Challenge

* A manual approach and inconsistent planning standards for laying fiber optic networks meant a great deal of effort and high costs
* Geodata infrastructure (GDI) is set to automate planning in conjunction with artificial intelligence (AI)
* Secure storage and ultra-rapid analysis of geodata such as aerial photographs, point clouds from laser scanners and images from digital cameras
* Capacity constraints: storing and processing the large volumes of data in the company's data center would be too cost-intensive

## The Solution

* Automation of the planning process using the Open Telekom Cloud
* GDPR-compliant data processing and storage
* Dynamic usage thanks to the pay-as-you-go model

### Automated Planning Made Easy

The T-Surface Car collects photos and 3D point clouds of up to 500 gigabytes for each expansion area, which are uploaded to a bucket of the Object Storage Service (OBS) in the Open Telekom Cloud. An artificial neural network (ANN) from Fraunhofer IPM is used to evaluate the survey vehicle's data, and classifies it according to 30 surface and object types. In order to classify them, DT Technik GmbH scales horizontally with twenty GPU VMs in the Open Telekom Cloud. In the process, Fraunhofer IPM has already trained the ANN with over 90,000 photos and it can thus be used as a docker container in the planning process. This enables more efficient use of system resources.

In addition to the information from the T-Surface Car, the Open Telekom Cloud also contains cadastral data, information about Telekom networks already installed in the expansion area, and images from the European Space Agency's (ESA) Sentinel earth observation satellites. They are used to calculate the exact surface structure of the expansion area. A process that is automated in the Open Telekom Cloud using multiple graphics processing units (GPUs). The resulting two-dimensional images show how and where fiber optic routes can best be laid.

### Three Times as Fast, Thanks to Open Telekom Cloud

Planners have been actively working with the cloud solution since 2020. Expansion costs can be calculated much more accurately and quickly with the AI-based process in the Open Telekom Cloud. Automation enables planning times to be reduced by up to 75 percent. New routes are calculated automatically, and the planners can work more quickly, move virtually through the roads themselves using 2D or 3D models and take measurements. For example, whether a sidewalk is wide enough for a power distribution box. "*This site protection has to be approved by the local authorities. For this, a form is automatically created in the GDI,*" says Tobias Frechen. This way, all documents for fiber optic expansion can be made available to the municipalities digitally in the future.


## See Also

:::info Additional Information

* Read the whole success story [here](https://www.t-systems.com/de/en/success-stories/cloud-and-infrastructure/fiber-factory).
* [Download](https://www.t-systems.com/resource/blob/388280/00f912430705e453e79081c2bc3d5ff1/DL-Flyer-FTTH-Factory-T-Systems-EN-01-2021.pdf) our reference flyer.

:::
