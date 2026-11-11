/**
 *
 * https://accounts.sap.com/
 * https://account.sap.com/
 * https://api.sap.com/
 * https://developers.sap.com/
 *
 * SAP Developer Site   :
 * SAP Developer Console:
 * SAP API Documentation: https://help.sap.com/doc/a7c08a422cc14e1eaaffee83610a981d/2205/en-US/SF_HCM_OData_API_DEV.pdf
 */

// ── DPUse Framework
import type { ConnectorInterface } from '@dpuse/dpuse-shared';

// ── Connectors ───────────────────────────────────────────────────────────────────────────────────────────────────────

// No action is implemented yet, so 'config.json' lists none and the app offers none. Each action is added from
// dpuse-connector-template as it is implemented, and listed in 'config.json'.
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- The engine creates every connector with 'new', so it stays a class.
export class Connector implements ConnectorInterface {}
