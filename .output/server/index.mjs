globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/assets/AiBadge-DFUsJyWb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b8-bfw3qu67k/qbjTp8HHu6DdHQydY"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 184,
    "path": "../public/assets/AiBadge-DFUsJyWb.js"
  },
  "/assets/Alert-Bv3gypn5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d4-+NnJKYpbmP7auisgz1yiOp0j8oQ"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 724,
    "path": "../public/assets/Alert-Bv3gypn5.js"
  },
  "/assets/AnnouncementCard-BNy47WsJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-WCMcKOJ2C5WMAib1Lfz6LyvaWKs"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 1318,
    "path": "../public/assets/AnnouncementCard-BNy47WsJ.js"
  },
  "/assets/AttendanceRiskSection-DdHTtEHJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"113d-u9Di7kg9UepCaS52FSoN0C7tFno"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 4413,
    "path": "../public/assets/AttendanceRiskSection-DdHTtEHJ.js"
  },
  "/assets/AttendanceStatusBadge-CTAgqAwy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d2-lXxGMsJqf0B7d9dRV3G4ADLABkM"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 466,
    "path": "../public/assets/AttendanceStatusBadge-CTAgqAwy.js"
  },
  "/assets/Avatar-CPKhZA1O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e6-7c3AYR7islgvd11+ZyUccAmBBdg"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 486,
    "path": "../public/assets/Avatar-CPKhZA1O.js"
  },
  "/assets/Breadcrumb-C9XLkfk0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"298-yXXE9gIh4jv4edMLU8vxHgNiL6U"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 664,
    "path": "../public/assets/Breadcrumb-C9XLkfk0.js"
  },
  "/assets/Badge-UKVs02eD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21f-m1dEjC38luelkveMlXnQy6VpHwg"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 543,
    "path": "../public/assets/Badge-UKVs02eD.js"
  },
  "/assets/Card-PKR1r-K0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f2-4CiWZNpe6x5h+fztTZAs5SZPoM4"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 242,
    "path": "../public/assets/Card-PKR1r-K0.js"
  },
  "/assets/Checkbox-DIdF6Rdr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"291-WwA0OXfHQxC5fqF/BYJsOTpr4mo"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 657,
    "path": "../public/assets/Checkbox-DIdF6Rdr.js"
  },
  "/assets/ColorPicker-BepNv4uq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4af-S8bmY/ypxmQnT4lAXbfjC63Z5Hg"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1199,
    "path": "../public/assets/ColorPicker-BepNv4uq.js"
  },
  "/assets/ConfirmDialog-B_nDJ1Rp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3a1-/SSZJq9PRVgeQkJQzXdMuFKLXZ0"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 929,
    "path": "../public/assets/ConfirmDialog-B_nDJ1Rp.js"
  },
  "/assets/CurrencyInput-BhuhUh9l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f3-FnY0F/5AOj1jAKcfpifm8MdpCzg"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 1523,
    "path": "../public/assets/CurrencyInput-BhuhUh9l.js"
  },
  "/assets/CustomReportBuilder-IQpdKCou.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18cf-TQESDy81Bf0WBjsydDads/wV/zk"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 6351,
    "path": "../public/assets/CustomReportBuilder-IQpdKCou.js"
  },
  "/assets/Button-B6fbflVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"522-XVAGswFL2SKaZY7Z0ADZUHbXpyQ"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 1314,
    "path": "../public/assets/Button-B6fbflVJ.js"
  },
  "/assets/DataTable-JPqs7li2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa0-FW5/xOKVBaI4NHeRA/MB4Bw0RMo"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 2720,
    "path": "../public/assets/DataTable-JPqs7li2.js"
  },
  "/assets/DatePicker-D9X6aNDP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34b-dqNbX2WozF29xrq0ukFzy4V7qcg"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 843,
    "path": "../public/assets/DatePicker-D9X6aNDP.js"
  },
  "/assets/EmployeeAvatar-BI1sGx9k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d3-Cun3+oNavjjURLzhxiYAHMr45NQ"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 979,
    "path": "../public/assets/EmployeeAvatar-BI1sGx9k.js"
  },
  "/assets/EmployeeStatusBadge-ByOCYoWF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20d-oL8/sy7n3ybZfwIdlNQUPB0vj3E"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 525,
    "path": "../public/assets/EmployeeStatusBadge-ByOCYoWF.js"
  },
  "/assets/EmptyState-7R-Ue_8w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-Bhn90GKngSNCohI/8Z5wHOMvo9M"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 522,
    "path": "../public/assets/EmptyState-7R-Ue_8w.js"
  },
  "/assets/DelegationCard-DokhI_46.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"859-Y0lSk9vcUOe1bwxI8COvElKuyJg"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 2137,
    "path": "../public/assets/DelegationCard-DokhI_46.js"
  },
  "/assets/GoalProgressRing-BEfAlOWQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-e/5A5jVBDRmTLfRhEOQ5u/K49Ww"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 837,
    "path": "../public/assets/GoalProgressRing-BEfAlOWQ.js"
  },
  "/assets/FormRenderer-T82FmZ-D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"342c-gpPV43V8oWD9JNzlekn5VTZInCc"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 13356,
    "path": "../public/assets/FormRenderer-T82FmZ-D.js"
  },
  "/assets/FileUpload-BwP7dBeg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"85b-LEvc8E6jreXxJRAYepZaOU9/P3s"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2139,
    "path": "../public/assets/FileUpload-BwP7dBeg.js"
  },
  "/assets/GoalStatusBadge-ByljthXS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15a-KrJUSxtIqWG5FaZmSlvXKnvQLGM"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 346,
    "path": "../public/assets/GoalStatusBadge-ByljthXS.js"
  },
  "/assets/InfoTooltip-B9w92HOu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"304-CTE4nuosmRQghr+F7pCOtWrgYVU"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 772,
    "path": "../public/assets/InfoTooltip-B9w92HOu.js"
  },
  "/assets/Input-DOWb9Bcd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ca-yzZggDBtBVMiYsg2r3TrBjlmIXA"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 1226,
    "path": "../public/assets/Input-DOWb9Bcd.js"
  },
  "/assets/LeaveBalanceCard-B8DJHHOA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"872-LJm3vFASv3q6jrey6LiCSlME+uQ"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 2162,
    "path": "../public/assets/LeaveBalanceCard-B8DJHHOA.js"
  },
  "/assets/LeaveBalanceGrid-BEBR3bLF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e1-JuV7x2bdI7T96DfRxjLDuFmbdic"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 481,
    "path": "../public/assets/LeaveBalanceGrid-BEBR3bLF.js"
  },
  "/assets/LeaveRequestCard-DN1sYHMQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fd-k9mpM1urXbjBgV6GrZPpbZrNb5s"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1533,
    "path": "../public/assets/LeaveRequestCard-DN1sYHMQ.js"
  },
  "/assets/LeaveStatusBadge-BZEkea7P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-Z3DiThbH81UWbE8ykF3PVTpec38"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 353,
    "path": "../public/assets/LeaveStatusBadge-BZEkea7P.js"
  },
  "/assets/LeaveTypeBadge-y7dOOB5U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d6-8tJWSgJrkZHvne3A4NRmSv9VFo0"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 470,
    "path": "../public/assets/LeaveTypeBadge-y7dOOB5U.js"
  },
  "/assets/Modal-B7BfV4QI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"319-K9+SJfhoKixwjpEtDHn1y/0rnwA"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 793,
    "path": "../public/assets/Modal-B7BfV4QI.js"
  },
  "/assets/MultiSelect-CfPSYx0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"622-BXneMNRpb3t9+k6+Ha+3gmAvTgY"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1570,
    "path": "../public/assets/MultiSelect-CfPSYx0K.js"
  },
  "/assets/ObjectiveCard-B-Y2tXco.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd6-nNdkv/IhA4bMhVfZpirZV8sBZhI"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 3286,
    "path": "../public/assets/ObjectiveCard-B-Y2tXco.js"
  },
  "/assets/PageHeader-BA1WzNFN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c4-l6kt++DvNmkfCdr8ptWj6fPwqCk"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 452,
    "path": "../public/assets/PageHeader-BA1WzNFN.js"
  },
  "/assets/PayrollRunCard-B3R2tRNg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ec-f1LgPRWugrQyTSXbn725Cgo9VP4"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1004,
    "path": "../public/assets/PayrollRunCard-B3R2tRNg.js"
  },
  "/assets/PayrollRunStatusBadge-DlBaEKxa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-RqBkIYb4rKVNUdtndpmLZJYmS8Y"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 277,
    "path": "../public/assets/PayrollRunStatusBadge-DlBaEKxa.js"
  },
  "/assets/PermissionGuard-Dluro2XW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-mRTOHsWPBMCN66ckJ0/h6zyg4CM"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 270,
    "path": "../public/assets/PermissionGuard-Dluro2XW.js"
  },
  "/assets/PermissionMatrix-CA-JFOlI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcb-S+pBh3PjDo1XeMoP5YbjSNy44Ig"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 3531,
    "path": "../public/assets/PermissionMatrix-CA-JFOlI.js"
  },
  "/assets/PhoneInput-BEdCAEJY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e1-YLXNXAZJ3697J821mCQCcBlflNQ"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 1249,
    "path": "../public/assets/PhoneInput-BEdCAEJY.js"
  },
  "/assets/ProgressBar-D1xtn83I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c3-Mb+f1l0M/KUO14smQxo2bhMHHlw"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 707,
    "path": "../public/assets/ProgressBar-D1xtn83I.js"
  },
  "/assets/RadioGroup-D9pJM-HU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b8-t6v4ualNoj1iqJsQgpjHApjjij4"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1208,
    "path": "../public/assets/RadioGroup-D9pJM-HU.js"
  },
  "/assets/RatingInput-CX7G4a4j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3dc-v1JoMFiXS7h1H07CmnP7Xhfdc6M"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 988,
    "path": "../public/assets/RatingInput-CX7G4a4j.js"
  },
  "/assets/RegularizationStatusBadge-CJja0KZp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab-KKHB4hiND0efo/N7S1dCQHCxyNs"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 683,
    "path": "../public/assets/RegularizationStatusBadge-CJja0KZp.js"
  },
  "/assets/RejectionDialog-CWw0mYUL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d3a-a0DzkVo1BH3DQ5Dj0LXyXpakzwk"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 3386,
    "path": "../public/assets/RejectionDialog-CWw0mYUL.js"
  },
  "/assets/ReportExportMenu-CAZFjxe1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ce-W0Mp2o+uwTQ9THDUQX9BUNGFsFU"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1486,
    "path": "../public/assets/ReportExportMenu-CAZFjxe1.js"
  },
  "/assets/ReportTable-Cshc7oDP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"184-YuwMrBYzT9lSlJe7TAFjhb6U4ac"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 388,
    "path": "../public/assets/ReportTable-Cshc7oDP.js"
  },
  "/assets/ReviewCycleBadge-Dw1Y_iNy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e7-8ExeDB34Mex4Kb6o1+eNhlO9uTk"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 487,
    "path": "../public/assets/ReviewCycleBadge-Dw1Y_iNy.js"
  },
  "/assets/ReviewFormRenderer-DL-z8leB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e31-wAOn4bCL6Ab/WxOLZerDxwgo6eA"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 3633,
    "path": "../public/assets/ReviewFormRenderer-DL-z8leB.js"
  },
  "/assets/RoleAssignmentRow-D7LJWKin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5c1-jx5tUN6fXNA8Y/2ZRYfCF2sv4hA"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 1473,
    "path": "../public/assets/RoleAssignmentRow-D7LJWKin.js"
  },
  "/assets/RoleBadge-Cf0aDP65.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"218-WxGKnHq+oUNAJJyU72bu/UaB06Q"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 536,
    "path": "../public/assets/RoleBadge-Cf0aDP65.js"
  },
  "/assets/ReviewStatusBadge-K_1TbyzT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-UokjaFDfa+cQm/Dnp/Nyjb5hs1w"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 384,
    "path": "../public/assets/ReviewStatusBadge-K_1TbyzT.js"
  },
  "/assets/SearchInput-C2c4FgYH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"45d-Bga9fhxS5eQBG/ikj9f44znlLW0"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 1117,
    "path": "../public/assets/SearchInput-C2c4FgYH.js"
  },
  "/assets/SalaryBreakupTable-DgSuR6a1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7ff-WQ4o88gv0Q9prRqoXBCwF0+ijVc"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2047,
    "path": "../public/assets/SalaryBreakupTable-DgSuR6a1.js"
  },
  "/assets/Select-BDlr0Y4P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3b1-wweZjze8rrDRPGiEiCaMeussM/k"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 945,
    "path": "../public/assets/Select-BDlr0Y4P.js"
  },
  "/assets/StepIndicator-D5kcTYr_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"368-tnOuCLQY14e8dlrvyw6UcVYkrR0"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 872,
    "path": "../public/assets/StepIndicator-D5kcTYr_.js"
  },
  "/assets/SlideOver-Cb3BEgDI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"620-acISuc8RVuklA0yrK7vVQ4IsuTY"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1568,
    "path": "../public/assets/SlideOver-Cb3BEgDI.js"
  },
  "/assets/TenantStatusBadge-qTK7ewHZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"170-byuKjAX2oX0jAFVnooHvZS/FBUI"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 368,
    "path": "../public/assets/TenantStatusBadge-qTK7ewHZ.js"
  },
  "/assets/StatCard-D5sxgQxo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"963-bUpassh5FYUu+WmtaCRjB+Gorcc"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 2403,
    "path": "../public/assets/StatCard-D5sxgQxo.js"
  },
  "/assets/TenantTable-DeBVL_oh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"163a-1nlakdxJB2N/qdaxNR20W1/z/t8"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 5690,
    "path": "../public/assets/TenantTable-DeBVL_oh.js"
  },
  "/assets/Tabs-kMaDF3_0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"661-k9+ermFlWtl5N/5iVg11UUc7UQc"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 1633,
    "path": "../public/assets/Tabs-kMaDF3_0.js"
  },
  "/assets/Textarea-DyYBXb1E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-2bkU1QmIftE6PxI/L7AL85M0H8Q"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 837,
    "path": "../public/assets/Textarea-DyYBXb1E.js"
  },
  "/assets/ThemePreview-BnNuV-zz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6d3-5dHTexDw9PkI+4wvw4YcfZst7z0"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1747,
    "path": "../public/assets/ThemePreview-BnNuV-zz.js"
  },
  "/assets/StepAccessReview-D6vq4fzg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"49de-YbVJ7B4efAbQGjtLW0CvVoeYuv8"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 18910,
    "path": "../public/assets/StepAccessReview-D6vq4fzg.js"
  },
  "/assets/Toast-C6SwvoNw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72-IU4iuKt0usfVu/Im6ZK6eZIvzhc"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 114,
    "path": "../public/assets/Toast-C6SwvoNw.js"
  },
  "/assets/TimePicker-CqOOuLyI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"370-hWizLp0/D2NweOSXVfJZr8mQ9Tg"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 880,
    "path": "../public/assets/TimePicker-CqOOuLyI.js"
  },
  "/assets/_admin-CLlM3QZk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb9-AIo4SI70fGWFLcHGoDrZXwwbQls"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 3257,
    "path": "../public/assets/_admin-CLlM3QZk.js"
  },
  "/assets/_admin.admin.dashboard-BzmyvwJo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22c-IDYBVTovqggbJ3+U/SwY5OOr/0s"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 556,
    "path": "../public/assets/_admin.admin.dashboard-BzmyvwJo.js"
  },
  "/assets/_admin.admin.dashboard-CIYCs5zT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"941-UDclJaF2VfA65EDO5S6IdYgSqt0"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 2369,
    "path": "../public/assets/_admin.admin.dashboard-CIYCs5zT.js"
  },
  "/assets/Toggle-PLLjrFmy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37c-OL2RlrI9N9qBaH7Z8nfzda8FdYI"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 892,
    "path": "../public/assets/Toggle-PLLjrFmy.js"
  },
  "/assets/_admin.admin.login-Cz98Q3Iw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94a-lhBO7ZgDCjauyVUXSkJPFQxYKIc"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 2378,
    "path": "../public/assets/_admin.admin.login-Cz98Q3Iw.js"
  },
  "/assets/_admin.admin.settings-K-w8f8rX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f-30QxDFBlMFrE7EnEYDk7oACE6Ak"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 2623,
    "path": "../public/assets/_admin.admin.settings-K-w8f8rX.js"
  },
  "/assets/_admin.admin.tenants-Byb80UiS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"547-dE7tQ7rOmt03lLO+tiZf49C0IY8"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 1351,
    "path": "../public/assets/_admin.admin.tenants-Byb80UiS.js"
  },
  "/assets/_admin.admin.tenants._tenantId-iTnNELrU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1890-8dMH25f97BvRMnqBlMqCnsxDoLI"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 6288,
    "path": "../public/assets/_admin.admin.tenants._tenantId-iTnNELrU.js"
  },
  "/assets/_admin.admin.tenants.new-qxZPqWAT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"104e-PnffJAG3RYbR4RCvMCmkKVG9UgE"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 4174,
    "path": "../public/assets/_admin.admin.tenants.new-qxZPqWAT.js"
  },
  "/assets/_app.ai-assistant-B_9tYq2r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"db7-kzliUylbnonKlmTC0h7PyDssxog"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 3511,
    "path": "../public/assets/_app.ai-assistant-B_9tYq2r.js"
  },
  "/assets/_app.announcements-BT6YiSs-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"82f-to8u478xdie1aD8Be3gUB7RQh70"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 2095,
    "path": "../public/assets/_app.announcements-BT6YiSs-.js"
  },
  "/assets/_app.attendance.index-CBmwm4p5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4d2c-mQZW6HeSOaXQx3GCjvx+aJmMAHw"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 19756,
    "path": "../public/assets/_app.attendance.index-CBmwm4p5.js"
  },
  "/assets/_app-Crnjoybh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c31-EKCb+tl3lzNDSZ40O3ZTJniKAPA"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 80945,
    "path": "../public/assets/_app-Crnjoybh.js"
  },
  "/assets/_app.attendance.records-Cf7WBtqT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21e3-N6In0A0MrzGNCsVlaDwMf6WGB3o"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 8675,
    "path": "../public/assets/_app.attendance.records-Cf7WBtqT.js"
  },
  "/assets/_app.attendance.regularization-kO-wMJAI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"deb-E9z3gfJKhstnX4PIys8/RzZ57qw"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 3563,
    "path": "../public/assets/_app.attendance.regularization-kO-wMJAI.js"
  },
  "/assets/_app.attendance.regularization.approvals-_TzZW0Hj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e14-nuzeADA3We58QKIWTFW4CkrCTcI"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 7700,
    "path": "../public/assets/_app.attendance.regularization.approvals-_TzZW0Hj.js"
  },
  "/assets/_app.attendance.team-Dazph2at.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10f8-OzDR8rK5FgMy7p39CpOs5qatrH0"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 4344,
    "path": "../public/assets/_app.attendance.team-Dazph2at.js"
  },
  "/assets/_app.attendance.regularization.index-CHz7rFZY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"32fa-GQKGeSa+zuD59jFCL4n27WjeUzU"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 13050,
    "path": "../public/assets/_app.attendance.regularization.index-CHz7rFZY.js"
  },
  "/assets/_app.candidates.invite-CPltU_RK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a0-qCW795r2yanse5DcNutWhDjx4LE"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 4768,
    "path": "../public/assets/_app.candidates.invite-CPltU_RK.js"
  },
  "/assets/_app.candidates._candidateId-vvL6Ja3d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8f11-Nj6uqZHJcklQZfKfLCgNkMMCLug"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 36625,
    "path": "../public/assets/_app.candidates._candidateId-vvL6Ja3d.js"
  },
  "/assets/_app.candidates.index-eHF8RvNx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"332d-cR758xPK5ZtfB+4IJDkf+xGSFXQ"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 13101,
    "path": "../public/assets/_app.candidates.index-eHF8RvNx.js"
  },
  "/assets/_app.dashboard-gOlp1PHC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79d0-LppLb97rCzrEA1RDqW8lv78+kp4"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 31184,
    "path": "../public/assets/_app.dashboard-gOlp1PHC.js"
  },
  "/assets/_app.employees-CoUPAHC9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-sPLiJTRVZUGvRG47NA1kp+ufOWY"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 95,
    "path": "../public/assets/_app.employees-CoUPAHC9.js"
  },
  "/assets/_app.employees._employeeId.edit-Dt6H1TwO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c3c-2iWwo0sBm5jOW0b0fyyNCmbd83I"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 3132,
    "path": "../public/assets/_app.employees._employeeId.edit-Dt6H1TwO.js"
  },
  "/assets/_app.employees.index-t9du9hxx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23d7-F6BbbwfZLdoUzkX1Vz77GNNix8g"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 9175,
    "path": "../public/assets/_app.employees.index-t9du9hxx.js"
  },
  "/assets/_app.employees.new-DJcgqZ6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1b-tX1WqX7aI/wg4pur7NFHVP+9YeQ"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 3867,
    "path": "../public/assets/_app.employees.new-DJcgqZ6g.js"
  },
  "/assets/_app.employees._employeeId-Cchnom0n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"54ae-dbUnISgFewN5RYZ+xefL3T1l9mE"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 21678,
    "path": "../public/assets/_app.employees._employeeId-Cchnom0n.js"
  },
  "/assets/_app.expenses.index-CosRaQVu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c49-dGrfBz6lZH9xhB5p9wMTpaEmKHw"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 3145,
    "path": "../public/assets/_app.expenses.index-CosRaQVu.js"
  },
  "/assets/_app.expenses.new-C-_p7oiL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9ea-laOjYx43da6ggggsKWCEEG3Wa6k"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2538,
    "path": "../public/assets/_app.expenses.new-C-_p7oiL.js"
  },
  "/assets/_app.helpdesk.index-BSFckX2u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145d-5NcgvEpHro1ySI+RPEoZRlOlMNk"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 5213,
    "path": "../public/assets/_app.helpdesk.index-BSFckX2u.js"
  },
  "/assets/_app.helpdesk.new-aQbuJvFm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"99a-YyqnYxB7+cOYsuKroAI448Q644I"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2458,
    "path": "../public/assets/_app.helpdesk.new-aQbuJvFm.js"
  },
  "/assets/_app.leave.apply-CgGqiOkJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"485b-g/XEfSILkiGEe6c9Zi6DeZuJs6U"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 18523,
    "path": "../public/assets/_app.leave.apply-CgGqiOkJ.js"
  },
  "/assets/_app.leave.approvals-Pr_SMh4Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17ba-p5C3+pcR/rcEas5n0SW29zXOnsw"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 6074,
    "path": "../public/assets/_app.leave.approvals-Pr_SMh4Y.js"
  },
  "/assets/_app.leave.calendar-eUhweuOH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1045-XdPEQTM9E8y+Fhh1Ab0lq2QSGF4"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 4165,
    "path": "../public/assets/_app.leave.calendar-eUhweuOH.js"
  },
  "/assets/_app.leave.index-CTJ47Fs-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"827-ohcv/Jkvz6lZw2EOayiDDdy8tm0"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 2087,
    "path": "../public/assets/_app.leave.index-CTJ47Fs-.js"
  },
  "/assets/_app.leave.requests-LVS-y4X8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14d5-V4T6+2WSdG9RRjatKPXDHjUao20"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 5333,
    "path": "../public/assets/_app.leave.requests-LVS-y4X8.js"
  },
  "/assets/_app.notifications-DPwN1423.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1a-6OJVH1WLVTNCrNJ5CXArc1OpONc"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 2842,
    "path": "../public/assets/_app.notifications-DPwN1423.js"
  },
  "/assets/_app.org-chart-C9f0eCCO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1178-B8Etf8s11BFfEEyQutf6jmbo2ps"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 4472,
    "path": "../public/assets/_app.org-chart-C9f0eCCO.js"
  },
  "/assets/_app.payroll.declarations-DeIMJuzo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e94-NVkPt8B9yCpcdsYQqukiOq7D688"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 3732,
    "path": "../public/assets/_app.payroll.declarations-DeIMJuzo.js"
  },
  "/assets/_app.me-Dk6qZ1D7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2deb-K0qT8jFPU0yRWkcPt04hYsQVf8A"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 11755,
    "path": "../public/assets/_app.me-Dk6qZ1D7.js"
  },
  "/assets/_app.payroll.payslips-2dVD3MJp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bcb-AlQf3xyRmWLWtHQGPq/6dLP/f2s"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 3019,
    "path": "../public/assets/_app.payroll.payslips-2dVD3MJp.js"
  },
  "/assets/_app.payroll.index-BDmK81P3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cec-HwsOmfZndDVBWDQP1XtQxxmA9l0"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 3308,
    "path": "../public/assets/_app.payroll.index-BDmK81P3.js"
  },
  "/assets/_app.payroll.runs._runId-CenqxL2e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"339f-pw7mTTLGweZfwcOFQ0rv6kN5Ud0"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 13215,
    "path": "../public/assets/_app.payroll.runs._runId-CenqxL2e.js"
  },
  "/assets/_app.leave.balances-BLT97deO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1f-WJBpcnT9vpXy1XSGP4VmSgy4+bo"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2847,
    "path": "../public/assets/_app.leave.balances-BLT97deO.js"
  },
  "/assets/_app.payroll.runs.index-Csu9sJPx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bc1-W69pcSQcd03+XJS/uAXXGnDO/dU"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 3009,
    "path": "../public/assets/_app.payroll.runs.index-Csu9sJPx.js"
  },
  "/assets/_app.performance.admin-BT8mQ6ax.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13ad-9Land2VHdh/U8pr4GUinokvDYP0"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 5037,
    "path": "../public/assets/_app.performance.admin-BT8mQ6ax.js"
  },
  "/assets/_app.performance.calibration-Cqn3EJ5e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16e1-sohDfSVHo3Fgb2S94GyMkz5eKGg"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 5857,
    "path": "../public/assets/_app.performance.calibration-Cqn3EJ5e.js"
  },
  "/assets/_app.performance.goals-C4JNB5lG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2225-XAIHpISSdwrN2lT4AW+naQR81HU"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 8741,
    "path": "../public/assets/_app.performance.goals-C4JNB5lG.js"
  },
  "/assets/_app.performance.reviews-aOzcGN50.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2670-b5amWfBUOgwB4leqiBR5F1uaESA"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 9840,
    "path": "../public/assets/_app.performance.reviews-aOzcGN50.js"
  },
  "/assets/_app.performance.team-DMNeAwsF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd9-qCROegiEmbNDroVTjWGqrStn8oA"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 3289,
    "path": "../public/assets/_app.performance.team-DMNeAwsF.js"
  },
  "/assets/_app.performance.reviews._reviewId-B0I-gAgc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"805-8sMvPzOEc6ONqOt2xLgrnzDdLEk"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 2053,
    "path": "../public/assets/_app.performance.reviews._reviewId-B0I-gAgc.js"
  },
  "/assets/_app.performance.index-D-jUmyzr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5eddb-8VT3mU9y6szbx06QRkRxj4bPCzc"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 388571,
    "path": "../public/assets/_app.performance.index-D-jUmyzr.js"
  },
  "/assets/_app.performance.team._employeeId-DJsnHeeJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28ae-0oeMm/W+mPUOZrnql38OkbCo1bY"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 10414,
    "path": "../public/assets/_app.performance.team._employeeId-DJsnHeeJ.js"
  },
  "/assets/_app.reports._reportSlug-Bu8bNen9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-625bifMC/TR7eUEJF7YpNWYfhh8"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 564,
    "path": "../public/assets/_app.reports._reportSlug-Bu8bNen9.js"
  },
  "/assets/_app.reports._reportSlug-DmcUMn09.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126d-yX1CbIsU9mso4KERaNvCv0SbB3Y"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 4717,
    "path": "../public/assets/_app.reports._reportSlug-DmcUMn09.js"
  },
  "/assets/_app.reports.builder._reportId-DEjSK1fr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91b-HZg2XIHTes8D9Ob6gWPKPVNoC9A"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 2331,
    "path": "../public/assets/_app.reports.builder._reportId-DEjSK1fr.js"
  },
  "/assets/_app.reports.builder._reportId-C2lDVVke.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-28UyMDW3D5rNSktEU16fukHM8HA"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 564,
    "path": "../public/assets/_app.reports.builder._reportId-C2lDVVke.js"
  },
  "/assets/_app.reports.builder.index-CCg5knxM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5cb-q7oebxsMle1/oYIBJq/c5+550rQ"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 1483,
    "path": "../public/assets/_app.reports.builder.index-CCg5knxM.js"
  },
  "/assets/_app.reports.index-0fjldoJR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-YTj7cy1mixBjEx9/KNGuoilxud4"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 564,
    "path": "../public/assets/_app.reports.index-0fjldoJR.js"
  },
  "/assets/_app.reports.index-DWLyEoPm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e87-2R45uFffCJaGVfSxvQt0i/qLeZQ"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 7815,
    "path": "../public/assets/_app.reports.index-DWLyEoPm.js"
  },
  "/assets/_app.reports.builder.index-sXgpKflI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23b-8TuhoOu+ZucMSCY7frpEGzvE5xI"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 571,
    "path": "../public/assets/_app.reports.builder.index-sXgpKflI.js"
  },
  "/assets/_app.settings-Bl_kSLBP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1019-mnoGCOV9FqRugVomtk4lc1dUu2c"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 4121,
    "path": "../public/assets/_app.settings-Bl_kSLBP.js"
  },
  "/assets/_app.settings.company-9DFZBKOq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"955-SAOtkhOgdXSgWm7Pvoi6Jf4LtHk"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 2389,
    "path": "../public/assets/_app.settings.company-9DFZBKOq.js"
  },
  "/assets/_app.settings.attendance-Cq5Gk8IQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d03-ghz7kBt5Zc1dKxWXfCYBNTixyM4"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 7427,
    "path": "../public/assets/_app.settings.attendance-Cq5Gk8IQ.js"
  },
  "/assets/_app.settings.company.departments-C3w69uuz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"def-NhaFGZP94cbif5OviZAy49d3si8"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 3567,
    "path": "../public/assets/_app.settings.company.departments-C3w69uuz.js"
  },
  "/assets/_app.settings.company.holidays-BrljDKvM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-Qkhx6ajy6FzLv9NRgQVIJvElirw"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.company.holidays-BrljDKvM.js"
  },
  "/assets/_app.settings.company.work-calendar-R939ouRU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b8-Wk8ylr/HiViCIqfuTLbM3EcSrAI"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 5048,
    "path": "../public/assets/_app.settings.company.work-calendar-R939ouRU.js"
  },
  "/assets/_app.settings.forms._formId.submissions-tzUfQ2eD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bf9-xKuaVu5ssK9D1w/1uVBwEQ8CEFE"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 3065,
    "path": "../public/assets/_app.settings.forms._formId.submissions-tzUfQ2eD.js"
  },
  "/assets/_app.settings.forms._formId.preview-Cr6TAxNa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ff-IIfhEEnnKxCJr4HdzTWmuzT+xys"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 1535,
    "path": "../public/assets/_app.settings.forms._formId.preview-Cr6TAxNa.js"
  },
  "/assets/_app.settings.forms.index-CDrvTpa6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126f-qbETQ3rGpJUkApThcgNlqcEw8Ro"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 4719,
    "path": "../public/assets/_app.settings.forms.index-CDrvTpa6.js"
  },
  "/assets/_app.settings.forms._formId.index-DnuS-VFw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5746-1K3LrNkjRHYdY//I822H96rEzqs"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 22342,
    "path": "../public/assets/_app.settings.forms._formId.index-DnuS-VFw.js"
  },
  "/assets/_app.settings.forms.new-6G-1MJCc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"251-Cby3/YF3zbrUiQOaejd91IcP9JY"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 593,
    "path": "../public/assets/_app.settings.forms.new-6G-1MJCc.js"
  },
  "/assets/_app.settings.hiring.rejection-reasons-CZUvCoaU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"114b-sFYCzqd+OgH5kYIlUG+pE0dOtsU"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 4427,
    "path": "../public/assets/_app.settings.hiring.rejection-reasons-CZUvCoaU.js"
  },
  "/assets/_app.settings.leave.index-DWAdxB_N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2374-BCPus6L5z1nIrM7uVmLd8MvJnHM"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 9076,
    "path": "../public/assets/_app.settings.leave.index-DWAdxB_N.js"
  },
  "/assets/_app.settings.leave.policies-1aiZJ82u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1963-aDqAi6SszxTGRfcAu6xz2ONEWtw"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 6499,
    "path": "../public/assets/_app.settings.leave.policies-1aiZJ82u.js"
  },
  "/assets/_app.settings.payroll.index-DOpPegIY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2756-SzRdGHmwrf4XhB0xyw232+/Txyw"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 10070,
    "path": "../public/assets/_app.settings.payroll.index-DOpPegIY.js"
  },
  "/assets/_app.settings.company.designations-B5zB7Gbs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fdf-OFmjx5MtycWahxUSNj/fSfBxbAI"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 4063,
    "path": "../public/assets/_app.settings.company.designations-B5zB7Gbs.js"
  },
  "/assets/_app.settings.roles-ofuzpBpu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"687-8rU2hu080xO2Tqmv4bLn99zi9tc"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 1671,
    "path": "../public/assets/_app.settings.roles-ofuzpBpu.js"
  },
  "/assets/_app.settings.payroll.structures-CRFPNxgX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16ed-FLq8L/J4hshJFcgQgg1UerQNfKs"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 5869,
    "path": "../public/assets/_app.settings.payroll.structures-CRFPNxgX.js"
  },
  "/assets/_app.settings.roles._roleId.edit--q4PCwfl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"608-MfJ0oWZ4DyVvmmc1LQxzUI3WuZA"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 1544,
    "path": "../public/assets/_app.settings.roles._roleId.edit--q4PCwfl.js"
  },
  "/assets/_app.settings.roles.assignments-C-LnGX_9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bd0-aqsIqp9FJKBxW/FBTsKegRwdo1M"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 3024,
    "path": "../public/assets/_app.settings.roles.assignments-C-LnGX_9.js"
  },
  "/assets/_app.settings.roles._roleId.index-DNdPQkz-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d25-xH/cRH702BCK56B9zVQ5qlXfOXI"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 3365,
    "path": "../public/assets/_app.settings.roles._roleId.index-DNdPQkz-.js"
  },
  "/assets/_app.settings.roles.audit-B3d_uOl_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9dc-0YxF9j2RZet/3pA0lfI0+93HB34"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 2524,
    "path": "../public/assets/_app.settings.roles.audit-B3d_uOl_.js"
  },
  "/assets/_app.settings.roles.delegation-CS5Q-ua-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-pwjsnt41rKSltMpTt7p2OUld89A"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.roles.delegation-CS5Q-ua-.js"
  },
  "/assets/_app.settings.roles.index-Bv8GEkpg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f2-5aJNo9tmoIoYhCq9SWfb9PRkQ7M"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 4594,
    "path": "../public/assets/_app.settings.roles.index-Bv8GEkpg.js"
  },
  "/assets/_app.settings.roles.new-VU86Hrtr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94f-9p1wn/Onn9nHUFIu6w3nlIBdiGE"',
    "mtime": "2026-08-11T18:29:57.614Z",
    "size": 2383,
    "path": "../public/assets/_app.settings.roles.new-VU86Hrtr.js"
  },
  "/assets/_platform.login-NjMZbNu1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12ee-Mwi1GmahUUsZcz+RDsvSgDCqRm4"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 4846,
    "path": "../public/assets/_platform.login-NjMZbNu1.js"
  },
  "/assets/_platform-CfFrcRFR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"351-QZSgWvGnnzCU2I1o3KRjhJzLLb4"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 849,
    "path": "../public/assets/_platform-CfFrcRFR.js"
  },
  "/assets/_platform.onboarding-C0ngu4Rj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcc-PgnECaHFur18mtXH97tsHl137VM"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 3532,
    "path": "../public/assets/_platform.onboarding-C0ngu4Rj.js"
  },
  "/assets/_platform.onboarding.admin-ClNk4Lwg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc6-fbOohpuz1FPHs2PKh/sCp+oyU1I"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 3526,
    "path": "../public/assets/_platform.onboarding.admin-ClNk4Lwg.js"
  },
  "/assets/_platform.onboarding.review-BIpy0aC2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"122f-UF0ngrzkrdW3f24H3obVPsNpsZk"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 4655,
    "path": "../public/assets/_platform.onboarding.review-BIpy0aC2.js"
  },
  "/assets/_platform.onboarding.brand-DiSMfdyy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10b3-6QRxDcfNo4A/mIfc04zBrAnYL5I"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 4275,
    "path": "../public/assets/_platform.onboarding.brand-DiSMfdyy.js"
  },
  "/assets/_portal-CoFL3vfY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"76e-yWKQ6csNLd2xKnQbfLFR9seSgU8"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 1902,
    "path": "../public/assets/_portal-CoFL3vfY.js"
  },
  "/assets/_portal.portal._pipelineId.form-CcngY8AH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f7-KcctiS2Bt9TUwYz0WI9+gEdE3mc"',
    "mtime": "2026-08-11T18:29:57.613Z",
    "size": 2551,
    "path": "../public/assets/_portal.portal._pipelineId.form-CcngY8AH.js"
  },
  "/assets/_portal.portal._pipelineId.index-BfUKzMNT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a78-dNG9Pnwe57lWeLcbEqEgrtyQdmw"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 6776,
    "path": "../public/assets/_portal.portal._pipelineId.index-BfUKzMNT.js"
  },
  "/assets/_portal.portal.index-OJWmhamI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"737-ZD3+295sUVXRwJdAH2KLE3yaF/k"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 1847,
    "path": "../public/assets/_portal.portal.index-OJWmhamI.js"
  },
  "/assets/admin-DAMgYG_P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147c-DpP/fJqpnomdu4b0JTBUhtucLB8"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 5244,
    "path": "../public/assets/admin-DAMgYG_P.js"
  },
  "/assets/ai-Bj_E97A8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2138-fGBEmM3ANPh8YqJ5if7DprlqAXY"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 8504,
    "path": "../public/assets/ai-Bj_E97A8.js"
  },
  "/assets/arrow-up-right-IHKvnhOJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-xtg1Bj+CHNk1VL1xYCbKokCYemo"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 179,
    "path": "../public/assets/arrow-up-right-IHKvnhOJ.js"
  },
  "/assets/attendance-BkGJE-Ur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"203-0EXbj37NyqpH57BjGAUI+2GnWk0"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 515,
    "path": "../public/assets/attendance-BkGJE-Ur.js"
  },
  "/assets/_portal.portal._pipelineId.offer-DDEG52b8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"30d-SfmKGYsoCNNpnVlOU9vWIXHK9fQ"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 781,
    "path": "../public/assets/_portal.portal._pipelineId.offer-DDEG52b8.js"
  },
  "/assets/auth-DURDIpSd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"43b-FZiS5zWmebjKHld6o1Phd2siOO8"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 1083,
    "path": "../public/assets/auth-DURDIpSd.js"
  },
  "/assets/auth-DhkT9Ki5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"443-jJ9EIX32PX3VncMWVEVU/SigvBg"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 1091,
    "path": "../public/assets/auth-DhkT9Ki5.js"
  },
  "/assets/award-mAYzOuGw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"119-VuHE4Zxd7eS/uLURyLZiXT95YjE"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 281,
    "path": "../public/assets/award-mAYzOuGw.js"
  },
  "/assets/bell-xULhBQPe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-9iA9HnpEBQxcXaGYLtdYK8VUl+4"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 302,
    "path": "../public/assets/bell-xULhBQPe.js"
  },
  "/assets/briefcase-CY4_1gwo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-f+qfZNT+2k4P9GgY0srALsFfXCw"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 232,
    "path": "../public/assets/briefcase-CY4_1gwo.js"
  },
  "/assets/calendar-DAG6qFpp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d-koOEyEbNqI/sOW+Im9cBisLylu4"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 269,
    "path": "../public/assets/calendar-DAG6qFpp.js"
  },
  "/assets/calendar-days-PbwLCwip.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-drzbcndXroGItMjeYB95OZ8jDho"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 506,
    "path": "../public/assets/calendar-days-PbwLCwip.js"
  },
  "/assets/candidate-iiHXj_aH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"694-TLQ8S1zSZp6FoBIxKkA8GCCPpmY"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 1684,
    "path": "../public/assets/candidate-iiHXj_aH.js"
  },
  "/assets/candidates-XoeEJx7a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2687-vskUn8fsdsHPNcoF5J4kZDtIK2I"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 9863,
    "path": "../public/assets/candidates-XoeEJx7a.js"
  },
  "/assets/chevron-down-Ck3W-oie.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c-7lh8VkN7ZGeLPT5b7Sm2XIZfhZI"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 140,
    "path": "../public/assets/chevron-down-Ck3W-oie.js"
  },
  "/assets/check-fR05YBkJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-8uneLUEttse+1W/l/lo1bVFIwIY"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 131,
    "path": "../public/assets/check-fR05YBkJ.js"
  },
  "/assets/circle-check-9v54iLBt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9-9B/lxe3UPvijEnaXj7vlDeyitU0"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 185,
    "path": "../public/assets/circle-check-9v54iLBt.js"
  },
  "/assets/chevron-right-N2g3DfKZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e0-RukCTbrgqFmnoS1mKFEgSPfWZac"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 224,
    "path": "../public/assets/chevron-right-N2g3DfKZ.js"
  },
  "/assets/clock-L2LE_ijo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0-fQMMyrMgN08+b3QEVNaebfuFLzA"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 176,
    "path": "../public/assets/clock-L2LE_ijo.js"
  },
  "/assets/chart-column-_-B7Zlz1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-YOh85TE9kTzavk6Ewxhoe2DvARk"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 263,
    "path": "../public/assets/chart-column-_-B7Zlz1.js"
  },
  "/assets/createLucideIcon-BQGpE6bb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-G2W4KP8ha1UK+xXCW2ZB4tqrUsM"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 1202,
    "path": "../public/assets/createLucideIcon-BQGpE6bb.js"
  },
  "/assets/defaults-jxLY-CuN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"92-jIaGhVbZmJGfP4EH8xp1SjanFKI"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 146,
    "path": "../public/assets/defaults-jxLY-CuN.js"
  },
  "/assets/employee-DXwVkTp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dd-dzLDMZWdD3CU9q8o7uFJvdLd/64"',
    "mtime": "2026-08-11T18:29:57.612Z",
    "size": 221,
    "path": "../public/assets/employee-DXwVkTp3.js"
  },
  "/assets/ess-CeCy67nS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"309-EMXSKuzcxAlyp3Quovw5/44Vq0A"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 777,
    "path": "../public/assets/ess-CeCy67nS.js"
  },
  "/assets/file-text-DGEgTBBg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18d-/zP7eDl/3P+RVmMbUeX1/e0xXr4"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 397,
    "path": "../public/assets/file-text-DGEgTBBg.js"
  },
  "/assets/forms-DT1xuP3y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c0a-11L+x845BvaBTSvFmt5hcx2kYoo"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 3082,
    "path": "../public/assets/forms-DT1xuP3y.js"
  },
  "/assets/index-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 41,
    "path": "../public/assets/index-DtqBFgK5.js"
  },
  "/assets/leave-BMGK6tPz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-UCtrj5+BEw2zaCk0BGm1Hr3FAoI"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 386,
    "path": "../public/assets/leave-BMGK6tPz.js"
  },
  "/assets/formConditions-B3k6BsX0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12c1-WqApgUEHSWu9rqZGbNRzJQKAQCg"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 4801,
    "path": "../public/assets/formConditions-B3k6BsX0.js"
  },
  "/assets/localStorage-BwOw2TLD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174a-Htd5ev8Dsbw2Lm/2gQryaUjGR/A"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 5962,
    "path": "../public/assets/localStorage-BwOw2TLD.js"
  },
  "/assets/lock-D2usDp3q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d5-ERgmW1AGcsmdvJAPRKdSUNAa6D0"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 213,
    "path": "../public/assets/lock-D2usDp3q.js"
  },
  "/assets/onboarding-3TGgdWLG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fa-dVcUpHH1WB+wnDnyRcxJCN0yT4M"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 1530,
    "path": "../public/assets/onboarding-3TGgdWLG.js"
  },
  "/assets/performance-DtSari8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"246-hEuMcNKrgX+fZITKlA41iSBTWhc"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 582,
    "path": "../public/assets/performance-DtSari8d.js"
  },
  "/assets/plus-BpUNX6iv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-LYyNumyuXqdeyXYMvvcCTZl+/gE"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 165,
    "path": "../public/assets/plus-BpUNX6iv.js"
  },
  "/assets/rbac-3QGNU0Mf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2455-WO8mAVY9Kpwvy/29w8a539L/WZc"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 9301,
    "path": "../public/assets/rbac-3QGNU0Mf.js"
  },
  "/assets/rbac-DabzOt9u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d1-9CsOdK4psjLLv8HLCCiZ0HrYQIg"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 209,
    "path": "../public/assets/rbac-DabzOt9u.js"
  },
  "/assets/index-CRBb0AmD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"941f3-JJTJtPzkaJ7LP1FNcG2zr+YPIIw"',
    "mtime": "2026-08-11T18:29:57.615Z",
    "size": 606707,
    "path": "../public/assets/index-CRBb0AmD.js"
  },
  "/assets/save-DEKjHErd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-jfS1s+EZRVmFD9NbR8Yffifpj80"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 339,
    "path": "../public/assets/save-DEKjHErd.js"
  },
  "/assets/send-DrYRhYZe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-YOB9exef1nQ3EC0JCkLK5ympTmw"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 302,
    "path": "../public/assets/send-DrYRhYZe.js"
  },
  "/assets/sparkles-CYRkavnc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-3O5lSrxlcTQ+iN7iE5UCxmGVKv4"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 506,
    "path": "../public/assets/sparkles-CYRkavnc.js"
  },
  "/assets/square-check-big-Blytf_lb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1-PGAasaB9UEuIMxLcTbUQ2ICOn1U"',
    "mtime": "2026-08-11T18:29:57.611Z",
    "size": 241,
    "path": "../public/assets/square-check-big-Blytf_lb.js"
  },
  "/assets/shield-check-Y_4pFwGV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147-Yxfrz05eVN9uK0AUL7dmAbU41dg"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 327,
    "path": "../public/assets/shield-check-Y_4pFwGV.js"
  },
  "/assets/target-DJ3Xl4M7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-VWy+e/OWPl2rfqKI7nWJa85LSRI"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 233,
    "path": "../public/assets/target-DJ3Xl4M7.js"
  },
  "/assets/tenant-CwzS9URe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a5-7LWmg6VPeQzgH314fipMxu8qqqU"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 677,
    "path": "../public/assets/tenant-CwzS9URe.js"
  },
  "/assets/square-TgHkNQTN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22d-RFczJpbxziNWZCKFQ/k5oUUJo0A"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 557,
    "path": "../public/assets/square-TgHkNQTN.js"
  },
  "/assets/tenants-DW9dqVmu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"350-Dy/FfsYF/1coc8bly2gCUp1cgEc"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 848,
    "path": "../public/assets/tenants-DW9dqVmu.js"
  },
  "/assets/trending-up-vgQ9kiWk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bb-/rz08ybMzhSom4RtIitkfHCw8wY"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 187,
    "path": "../public/assets/trending-up-vgQ9kiWk.js"
  },
  "/assets/styles-BToGiviu.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1f94e-XixoRYJ9TRlmURVWlqvXn+BmcxA"',
    "mtime": "2026-08-11T18:29:57.603Z",
    "size": 129358,
    "path": "../public/assets/styles-BToGiviu.css"
  },
  "/assets/triangle-alert-D19SFXbO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-+Qp9EgOg+OE/G6FAn1HRAhBjL1c"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 277,
    "path": "../public/assets/triangle-alert-D19SFXbO.js"
  },
  "/assets/useCurrentEmployee-DpQ1vukU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18e-37NvdjSiXAHki7RVx3Pd6+S17EA"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 398,
    "path": "../public/assets/useCurrentEmployee-DpQ1vukU.js"
  },
  "/assets/star-6bvq7jx3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e4-d1bcJ4y3ddA5AuxeMIE57Wj33L0"',
    "mtime": "2026-08-11T18:29:57.610Z",
    "size": 484,
    "path": "../public/assets/star-6bvq7jx3.js"
  },
  "/assets/useRouterState-D8H1yErB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-H1gvc4yWQqtIPMpD0ILhUHitS5I"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 350,
    "path": "../public/assets/useRouterState-D8H1yErB.js"
  },
  "/assets/usePermission-Dvm73aSu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"134-a8uPCEgB09GXHVKYMDl06LiQpDk"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 308,
    "path": "../public/assets/usePermission-Dvm73aSu.js"
  },
  "/assets/user-check-DcfFeSY3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-Vma2HyWzMxC/0P0LH+Kmvd2p/LA"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 250,
    "path": "../public/assets/user-check-DcfFeSY3.js"
  },
  "/assets/users-COJAYC_8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e-NTHeBLJ03cJ32wxomiYutc0Pqqw"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 318,
    "path": "../public/assets/users-COJAYC_8.js"
  },
  "/assets/useAiChat-UIJZXMHf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b95-P6EnurqHL9YjNJSovSa4RkLuuns"',
    "mtime": "2026-08-11T18:29:57.607Z",
    "size": 7061,
    "path": "../public/assets/useAiChat-UIJZXMHf.js"
  },
  "/assets/utils-kXW4prSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69e-bFIRWVeHky7fyTZGF6zHzjKRO7Y"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 1694,
    "path": "../public/assets/utils-kXW4prSi.js"
  },
  "/assets/search-C0AgJOjn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-Kmk2UKkdzkVA84uAlU1L944RoqQ"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 181,
    "path": "../public/assets/search-C0AgJOjn.js"
  },
  "/assets/validation-BXzMcfHY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"233-G/KXKaDdHqFde8rpCCeQgFPdx+0"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 563,
    "path": "../public/assets/validation-BXzMcfHY.js"
  },
  "/assets/x-yOu4xwfk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-Tv/t6t4T3yiz1rKjzFV5p983bI0"',
    "mtime": "2026-08-11T18:29:57.608Z",
    "size": 166,
    "path": "../public/assets/x-yOu4xwfk.js"
  },
  "/assets/zap-DCUFs8rI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"112-PMiK0aWpv1hd0/PXmqgHrnxYr3E"',
    "mtime": "2026-08-11T18:29:57.609Z",
    "size": 274,
    "path": "../public/assets/zap-DCUFs8rI.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_RmxWqn = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_RmxWqn };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
