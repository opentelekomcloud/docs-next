---
id: using-css-to-accelerate-database-query-and-analysis
title: Using CSS to Accelerate Database Query and Analysis
tags: [css, opensearch]
---

# Using CSS to Accelerate Database Query and Analysis

Elasticsearch is used as a supplement to relational databases, such as MySQL and GaussDB(for MySQL), to improve the full-text search and high-concurrency ad hoc query capabilities of the databases. This best practice describes how to synchronize data from a MySQL database to CSS to accelerate full-text search and ad hoc query and analysis. The following figure shows the solution process.

<center>

![**Figure 1** Using CSS to accelerate database query and analysis](/img/docs/best-practices/big-data-and-data-analysis/cloud-search-service/en-us_image_0000001299757424.png)

</center>

:::note procedure
💾 Service data is stored in the MySQL database, then  
📡 DRS synchronizes data from MySQL to CSS in real time, then  
🛠️ CSS is used for full-text search and data query and analysis.
:::

## Prerequisites

* A CSS cluster and a MySQL database in security mode have been created, and they are in the same VPC and security group.
* Data to be synchronized exists in the MySQL database. This section uses the following table structure and initial data as an example.
    1. Create a student information table in MySQL.

        ```sql
        CREATE TABLE \`student\` (
          \`dsc\` varchar(100) COLLATE utf8mb4\_general\_ci DEFAULT NULL,
          \`age\` smallint unsigned DEFAULT NULL,
          \`name\` varchar(32) COLLATE utf8mb4\_general\_ci NOT NULL,
          \`id\` int unsigned NOT NULL,
          PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci;```
        ```

    2. Insert the initial data of three students into the MySQL database.

        ```sql
        INSERT INTO student (id,name,age,dsc)
        VALUES
        ('1','Jack Ma Yun','50','Jack Ma Yun is a Chinese business magnate, investor and philanthropist.'),
        ('2','will smith','22','also known by his stage name the Fresh Prince, is an American actor, rapper, and producer.'),
        ('3','James Francis Cameron','68','the director of avatar');
        ```

* Indexes have been created in the CSS cluster and match the table indexes in the MySQL database. The following is an example of the indexes in the cluster in this chapter:

    ```json
    PUT student
    {
      "settings": {
        "number\_of\_replicas": 0,
        "number\_of\_shards": 3
        },
      "mappings": {
        "properties": {
          "id": {
            "type": "keyword"
            },
          "name": {
            "type": "short"
            },
          "age": {
            "type": "short"
            },
          "desc": {
            "type": "text"
            }
        }
      }
    }
    ```

    :::tip
    Configure `number_of_shards` and `number_of_replicas` as needed.
    :::

## Procedure

1. Use DRS to synchronize MySQL data to CSS in real time. For details, see .

    In this example, configure the parameters by following the suggestions in following table:

   | Module                                                                | Parameter                               | Suggestion                                                                                                                                                                                                                                                                                                                                                            |
   | --------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | **Create Synchronization Instance > Synchronize Instance Details**    | Network Type                            | Select **VPC**.                                                                                                                                                                                                                                                                                                                                                       |
   |                                                                       | Source DB Instance                      | Select the RDS for MySQL instance to be synchronized, that is, the MySQL database that stores service data.                                                                                                                                                                                                                                                           |
   |                                                                       | Synchronization Instance Subnet         | Select the subnet where the synchronization instance is located. You are advised to select the subnet where the database instance and the CSS cluster are located.                                                                                                                                                                                                    |
   | **Configure Source and Destination Databases > Destination Database** | VPC and Subnet                          | Select the VPC and subnet of the CSS cluster.                                                                                                                                                                                                                                                                                                                         |
   |                                                                       | IP Address or Domain Name               | Enter the IP address of the CSS cluster. For details, see [Obtaining the IP address of a CSS cluster](https://docs.otc.t-systems.com/cloud-search-service/best-practice/using_css_to_accelerate_database_query_and_analysis.html#css-07-0024-li1999495913506).                                                                                                        |
   |                                                                       | Database Username and Database Password | Enter the administrator username (**admin**) and password of the CSS cluster.                                                                                                                                                                                                                                                                                         |
   |                                                                       | Encryption Certificate                  | Select the security certificate of the CSS cluster. If **SSL Connection** is not enabled, you do not need to select any certificate. For details, see [Obtaining the security certificate of a CSS cluster](https://docs.otc.t-systems.com/cloud-search-service/best-practice/using_css_to_accelerate_database_query_and_analysis.html#css-07-0024-li78671114175115). |
   | **Set Synchronization Task**                                          | Flow Control                            | Select **No**.                                                                                                                                                                                                                                                                                                                                                        |
   |                                                                       | Synchronization Object Type             | Deselect **Table structure**, because the indexes matching MySQL tables have been created in the CSS cluster.                                                                                                                                                                                                                                                         |
   |                                                                       | Synchronization Object                  | Select **Tables**. Select the database and table name corresponding to CSS. Ensure the type name in the configuration item is the same as the index name, that is, _doc.                                                                                                                                                                                              |
   | **Process Data**                                                      | -                                       | Click **Next**.                                                                                                                                                                                                                                                                                                                                                       |

    After the synchronization task is started, wait until the **Status** of the task changes from **Full** synchronization to **Incremental**, indicating real-time synchronization has started.

2. Check the synchronization status of the database.

    1. Verify full data synchronization. Run the following command in Kibana of CSS to check whether full data has been synchronized to CSS:

        ```json
        GET student/\_search
        ```

    2. Insert new data in the source cluster and check whether the data is synchronized to CSS. For example, insert a record whose `id` is `4` in the source cluster.

        ```sql
        INSERT INTO student (id,name,age,dsc)
        VALUES
        ('4','Bill Gates','50','Gates III is an American business magnate, software developer, investor, author, and philanthropist.')
        ```

        Run the following command in Kibana of CSS to check whether new data is synchronized to CSS:

        ```json
        GET student/\_search
        ```

    3. Update data in the source cluster and check whether the data is synchronized to CSS. For example, in the record whose `id` is `4`, change the value of `age` from `50` to `55`.

        ```sql
        UPDATE student set age\='55' WHERE id\=4;
        ```

        Run the following command in Kibana of CSS to check whether the data is updated in CSS:

        ```json
        GET student/\_search
        ```

    4. Delete data from the source cluster and check whether the data is deleted synchronously from CSS. For example, delete the record whose `id` is `4`.

        ```sql
        DELETE FROM student WHERE id=4;
        ```

        Run the following command in Kibana of CSS to check whether the data is deleted synchronously from CSS:

        ```json
        GET student/\_search
        ```

3. Verify the full-text search capability of the database. For example, run the following command to query the data that contains `avatar` in `dsc` in CSS:

    ```json
    GET student/\_search
    {
      "query": {
        "match": {
          "dsc": "avatar"
        }
      }
    }
    ```

4. Verify the ad hoc query capability of the database. For example, query `philanthropist` whose age is greater than `40` in CSS.

    ```json
    GET student/\_search
    {
      "query": {
        "bool": {
          "must": \[
            {
              "match": {
                "dsc": "philanthropist"
              }
            },
            {
              "range": {
                "age": {
                  "gte": 40
                }
              }
            }
          \]
        }
      }
    }
    ```

5. Verify the statistical analysis capability of the database. For example, use CSS to collect statistics on the age distributions of all users.

    ```json
    GET student/\_search
    {
      "size": 0,
      "query": {
        "match\_all": {}
      },
      "aggs": {
        "age\_count": {
          "terms": {
            "field": "age",
            "size": 10
          }
        }
      }
    }
    ```

## Other Operations

### Obtaining the IP address of a CSS cluster

    1. In the navigation pane on the left, choose *Clusters*.
    2. In the cluster list, locate a cluster, and obtain the IP address of the CSS cluster from the **Private Network Address** column. 

:::note
☑️ If the cluster has only one node, the IP address and port number of that node is displayed, e.g.: **10.62.179.32:9200**.  
☑️ If the cluster has multiple nodes, the IP addresses and port numbers of all nodes are displayed, e.g.: **10.62.179.32:9200,10.62.179.33:9200**.  
:::

### Obtaining the security certificate of a CSS cluster

    1. Log in to the CSS management console.
    2. In the navigation pane, choose *Clusters*. The cluster list is displayed.
    3. Click the name of a cluster to go to the cluster details page.
    4. On the *Configuration* page, click *Download Certificate* next to *HTTPS Access*.
