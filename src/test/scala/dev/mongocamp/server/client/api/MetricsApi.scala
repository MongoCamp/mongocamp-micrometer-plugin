/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package dev.mongocamp.server.client.api

import dev.mongocamp.server.test.TestServer
import dev.mongocamp.server.test.client.core.JsonSupport._
import dev.mongocamp.server.test.client.model.Metric
import sttp.client3._
import sttp.model.Method

object MetricsApi {

def apply(baseUrl: String = TestServer.serverBaseUrl) = new MetricsApi(baseUrl)
}

class MetricsApi(baseUrl: String) {

    /** Returns the JVM Metrics of the running MongoCamp Application
      *
      * Expected answers: code 200 : Seq[Metric] () code 0 : ErrorDescription () Headers : x-error-code - Error Code x-error-message - Message of the
      * MongoCampException x-error-additional-info - Additional information for the MongoCampException
      *
      * Available security schemes: httpAuth1 (http) httpAuth (http) apiKeyAuth (apiKey)
      */
    def jvmMetrics(username: String, password: String, bearerToken: String, apiKey: String)() =
      basicRequest
        .method(Method.GET, uri"$baseUrl/system/monitoring/jvm")
        .contentType("application/json")
        .auth
        .basic(username, password)
        .auth
        .bearer(bearerToken)
        .header("X-AUTH-APIKEY", apiKey)
        .response(asJson[Seq[Metric]])

    /** Returns the Metrics of events of the running MongoCamp Application.
     *
     * Expected answers: code 200 : Seq[Metric] () code 0 : ErrorDescription () Headers : x-error-code - Error Code x-error-message - Message of the
     * MongoCampException x-error-additional-info - Additional information for the MongoCampException
     *
     * Available security schemes: httpAuth1 (http) httpAuth (http) apiKeyAuth (apiKey)
     */
    def eventMetrics(username: String, password: String, bearerToken: String, apiKey: String)() =
      basicRequest
        .method(Method.GET, uri"$baseUrl/system/monitoring/events")
        .contentType("application/json")
        .auth
        .basic(username, password)
        .auth
        .bearer(bearerToken)
        .header("X-AUTH-APIKEY", apiKey)
        .response(asJson[Seq[Metric]])


    /** Returns the MongoDB Metrics of the running MongoCamp Application
     *
     * Expected answers: code 200 : Seq[Metric] () code 0 : ErrorDescription () Headers : x-error-code - Error Code x-error-message - Message of the
     * MongoCampException x-error-additional-info - Additional information for the MongoCampException
     *
     * Available security schemes: httpAuth1 (http) httpAuth (http) apiKeyAuth (apiKey)
     */
    def mongoDbMetrics(username: String, password: String, bearerToken: String, apiKey: String)() =
      basicRequest
        .method(Method.GET, uri"$baseUrl/system/monitoring/mongodb")
        .contentType("application/json")
        .auth
        .basic(username, password)
        .auth
        .bearer(bearerToken)
        .header("X-AUTH-APIKEY", apiKey)
        .response(asJson[Seq[Metric]])

    /** Returns the Metrics of the MongoCamp System
     *
     * Expected answers: code 200 : Seq[Metric] () code 0 : ErrorDescription () Headers : x-error-code - Error Code x-error-message - Message of the
     * MongoCampException x-error-additional-info - Additional information for the MongoCampException
     *
     * Available security schemes: httpAuth1 (http) httpAuth (http) apiKeyAuth (apiKey)
     */
    def systemMetrics(username: String, password: String, bearerToken: String, apiKey: String)() =
      basicRequest
        .method(Method.GET, uri"$baseUrl/system/monitoring/system")
        .contentType("application/json")
        .auth
        .basic(username, password)
        .auth
        .bearer(bearerToken)
        .header("X-AUTH-APIKEY", apiKey)
        .response(asJson[Seq[Metric]])

}
