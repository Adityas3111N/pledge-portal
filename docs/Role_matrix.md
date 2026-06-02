# Role Matrix

## Roles

| Role         | Description                                 |
| ------------ | ------------------------------------------- |
| Promoter     | Private industrial park developer/applicant |
| DCI          | District Industries Centre Officer          |
| DLC Chair    | District Level Committee Chair (DM)         |
| SLC          | State Level Committee Member                |
| Pledge Cell  | PLEDGE Cell Officer                         |
| Commissioner | Commissioner, Industries                    |
| Director     | Director, Industries                        |
| Inspector    | Field Inspection Officer                    |
| Auditor      | Audit & Compliance Officer                  |
| Super Admin  | System Administrator                        |

---

## Feature Access Matrix

| Feature                  | Promoter | DCI      | DLC Chair | SLC   | Pledge Cell | Commissioner | Director | Inspector | Auditor | Super Admin |
| ------------------------ | -------- | -------- | --------- | ----- | ----------- | ------------ | -------- | --------- | ------- | ----------- |
| Eligibility Check        | ✅        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Facilitation Tickets     | ✅        | ✅        | ❌         | ❌     | ✅           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Document Guidance        | ✅        | ✅        | ✅         | ✅     | ✅           | ✅            | ✅        | ✅         | ✅       | ✅           |
| Create Application       | ✅        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Edit Draft Application   | ✅        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Submit Application       | ✅        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Review Application       | ❌        | ✅        | ✅         | ✅     | ✅           | ✅            | ✅        | ❌         | ✅       | ✅           |
| Request Clarification    | ❌        | ✅        | ✅         | ✅     | ✅           | ✅            | ✅        | ❌         | ❌       | ✅           |
| Schedule Inspection      | ❌        | ✅        | ❌         | ❌     | ❌           | ❌            | ❌        | ✅         | ❌       | ✅           |
| Submit Inspection Report | ❌        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ✅         | ❌       | ✅           |
| DLC Review               | ❌        | ❌        | ✅         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| SLC Review               | ❌        | ❌        | ❌         | ✅     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Approve Application      | ❌        | ❌        | ✅         | ✅     | ❌           | ✅            | ✅        | ❌         | ❌       | ✅           |
| Reject Application       | ❌        | ❌        | ✅         | ✅     | ❌           | ✅            | ✅        | ❌         | ❌       | ✅           |
| Generate LOC/LOA         | ❌        | ❌        | ❌         | ❌     | ✅           | ✅            | ✅        | ❌         | ❌       | ✅           |
| Financial Management     | ❌        | ❌        | ❌         | ❌     | ✅           | ✅            | ✅        | ❌         | ✅       | ✅           |
| Plot Management          | ✅        | ✅        | ❌         | ❌     | ✅           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Reports & Analytics      | Limited  | District | District  | State | State       | State        | State    | Limited   | Audit   | All         |
| User Management          | ❌        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| System Configuration     | ❌        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ❌       | ✅           |
| Audit Logs               | ❌        | ❌        | ❌         | ❌     | ❌           | ❌            | ❌        | ❌         | ✅       | ✅           |

---

## Notes

* Promoters can only access their own applications, documents, plots, and payments.
* DCI users are restricted to their assigned district.
* DLC Chair can review district-level applications and committee decisions.
* SLC users can review state-level escalated applications.
* Inspectors can only access assigned inspections.
* Auditors have read-only access to audit-relevant records.
* Super Admin has unrestricted access to all modules.
* Final permissions will be refined during backend RBAC implementation.
