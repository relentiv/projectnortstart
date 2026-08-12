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
  "/assets/AiBadge-CrLpjfs_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b8-jj5TEEg04RicNBmy9fba6AT+e30"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 184,
    "path": "../public/assets/AiBadge-CrLpjfs_.js"
  },
  "/assets/AnnouncementCard-Be61YMQb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-vc2rK2BSJydvpKJl16Z7E8KniiQ"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1318,
    "path": "../public/assets/AnnouncementCard-Be61YMQb.js"
  },
  "/assets/Avatar-GAUU59re.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e6-Scqf3P6q1K1HfCzWP6ReewLaaRI"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 486,
    "path": "../public/assets/Avatar-GAUU59re.js"
  },
  "/assets/Badge-nRe59W2R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21f-prkcLHszvALmuS4BYYsl3zp/MzA"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 543,
    "path": "../public/assets/Badge-nRe59W2R.js"
  },
  "/assets/AttendanceRiskSection-BVjdEBFG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"113d-gRpMrOF9DPn1T6BsGzKsR80szlg"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 4413,
    "path": "../public/assets/AttendanceRiskSection-BVjdEBFG.js"
  },
  "/assets/Breadcrumb-BYBHgysZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"298-JUc1M08IEg3ushExZZEia++hMFw"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 664,
    "path": "../public/assets/Breadcrumb-BYBHgysZ.js"
  },
  "/assets/Alert-pDbgulq5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d4-RG3uS4eGROpz8uUSDpKgoJcKb1s"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 724,
    "path": "../public/assets/Alert-pDbgulq5.js"
  },
  "/assets/AttendanceStatusBadge-C4CU0eFP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d2-KDfAoPScP/zAFQw60O0XuBgSblE"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 466,
    "path": "../public/assets/AttendanceStatusBadge-C4CU0eFP.js"
  },
  "/assets/Checkbox-n38gCU0t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"291-jHIth7cucIvpVoukeiwPW6V7ZKQ"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 657,
    "path": "../public/assets/Checkbox-n38gCU0t.js"
  },
  "/assets/Card-LiV-eBXT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f2-TLeInL8iuTUEnbITNuuiABMGYpo"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 242,
    "path": "../public/assets/Card-LiV-eBXT.js"
  },
  "/assets/ConfirmDialog-BDb4-svE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3a1-klOjeQoFuPjhXO/GVlIb32nk82c"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 929,
    "path": "../public/assets/ConfirmDialog-BDb4-svE.js"
  },
  "/assets/CurrencyInput-BwXuUYJt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f3-SoTY9h0l9HofECAmcG/rKuRKHhs"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 1523,
    "path": "../public/assets/CurrencyInput-BwXuUYJt.js"
  },
  "/assets/Button-C16VNaQV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"522-XdIX3NioEEUpGHtzg5ujCyHhLMU"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 1314,
    "path": "../public/assets/Button-C16VNaQV.js"
  },
  "/assets/CustomReportBuilder-CS82um1G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18cf-hNdxeCaCcVbHHjDf/Lk3YCy1TzY"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 6351,
    "path": "../public/assets/CustomReportBuilder-CS82um1G.js"
  },
  "/assets/ColorPicker-CD1voaSh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4af-9KfWCZfTqG2w5DB9DEF1KzrFiFk"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1199,
    "path": "../public/assets/ColorPicker-CD1voaSh.js"
  },
  "/assets/DatePicker-Bvf_i749.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34b-IYSIfiKoQlnZypNkkspY5ie/Y8Q"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 843,
    "path": "../public/assets/DatePicker-Bvf_i749.js"
  },
  "/assets/DelegationCard-PqLqtsSz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"859-1ovkoH1sQoPOCUgU1fHJivIx/aU"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 2137,
    "path": "../public/assets/DelegationCard-PqLqtsSz.js"
  },
  "/assets/DataTable-avZFoZyn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6b-7mIyZQpl9RtETUZfO2lipt4Veh4"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 2923,
    "path": "../public/assets/DataTable-avZFoZyn.js"
  },
  "/assets/EmployeeStatusBadge-BTj0e_y8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"488-6cx6VmssvBozvNXpEula/o/WNJQ"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1160,
    "path": "../public/assets/EmployeeStatusBadge-BTj0e_y8.js"
  },
  "/assets/FileUpload-DDtHB7l5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"85b-a7j6VRJtS7Cy3jmg7SK66HXJHuc"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 2139,
    "path": "../public/assets/FileUpload-DDtHB7l5.js"
  },
  "/assets/EmployeeAvatar-Cv2YM1Wo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f3-FHd8s8qPgFdpehDygrWUMbdEEXE"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1523,
    "path": "../public/assets/EmployeeAvatar-Cv2YM1Wo.js"
  },
  "/assets/EmptyState-C77EVYio.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-PoMefq3yKpqemvYjAUpeTcjgE4s"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 522,
    "path": "../public/assets/EmptyState-C77EVYio.js"
  },
  "/assets/FormRenderer-9k0lst9Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"342c-HTnKFWiSAnguyhUYvBh4Ry6dkyA"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 13356,
    "path": "../public/assets/FormRenderer-9k0lst9Y.js"
  },
  "/assets/GoalProgressRing--9LZTGRq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-TgiyYG8hkz/jOR7Y/hqiHf61H2U"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 837,
    "path": "../public/assets/GoalProgressRing--9LZTGRq.js"
  },
  "/assets/GoalStatusBadge-cAE7t4Bp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15a-XrGCrMFBD+C6aFp4DwJiFK4CGcU"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 346,
    "path": "../public/assets/GoalStatusBadge-cAE7t4Bp.js"
  },
  "/assets/Input-B6MbMZLW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ca-MeHYt7K+5pRp4VIr+eV2o1iAAC0"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1226,
    "path": "../public/assets/Input-B6MbMZLW.js"
  },
  "/assets/LeaveRequestCard-BZCS3Ik1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c10-1uliTHDPXfOjwXnoKivlWBQ2vwU"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 3088,
    "path": "../public/assets/LeaveRequestCard-BZCS3Ik1.js"
  },
  "/assets/LeaveTypeBadge-4s9EV_LT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"241-JZvqBn5yRAhta11pND7CLteSd0s"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 577,
    "path": "../public/assets/LeaveTypeBadge-4s9EV_LT.js"
  },
  "/assets/InfoTooltip-_NXmA1H3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"304-e/Xx1R82bZl92sX/0ocaB2VxvBQ"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 772,
    "path": "../public/assets/InfoTooltip-_NXmA1H3.js"
  },
  "/assets/LeaveBalanceGrid-BvMCVlON.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"236-kKQ131kRHhcMLuAkmJKuMzCIu/o"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 566,
    "path": "../public/assets/LeaveBalanceGrid-BvMCVlON.js"
  },
  "/assets/LeaveBalanceCard-B_AsTRP9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"eb7-EOoWf+ZbBaEwbEXWlEnV25Udxyc"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 3767,
    "path": "../public/assets/LeaveBalanceCard-B_AsTRP9.js"
  },
  "/assets/Modal-YWcLJbZI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"319-6jbeLtgA3vsqTnciyY7y3Z2gsMM"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 793,
    "path": "../public/assets/Modal-YWcLJbZI.js"
  },
  "/assets/LeaveStatusBadge-BCvOs6cu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"553-9OmU1MR142m9lZnSJncvDzwiKgE"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1363,
    "path": "../public/assets/LeaveStatusBadge-BCvOs6cu.js"
  },
  "/assets/MultiSelect-DF1r18te.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"622-eAhATMZXIfkQVUqam6o61mTC3qo"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1570,
    "path": "../public/assets/MultiSelect-DF1r18te.js"
  },
  "/assets/ObjectiveCard-xmUajy5v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd6-Q3OQR7gT9MqjB3gUHILQPQ4QCe4"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 3286,
    "path": "../public/assets/ObjectiveCard-xmUajy5v.js"
  },
  "/assets/PayrollRunCard-DyjC-P_u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ec-ElFb89EDxNBQBKuM4y7pxmTjUbo"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1004,
    "path": "../public/assets/PayrollRunCard-DyjC-P_u.js"
  },
  "/assets/PermissionGuard-B4OinWih.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-JsEFy20SAAD6R33DoymlQ4rHkkc"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 270,
    "path": "../public/assets/PermissionGuard-B4OinWih.js"
  },
  "/assets/PageHeader-iGIo1Pxf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c4-1A7A6CXbiEyFM4yztJWjUUeNXic"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 452,
    "path": "../public/assets/PageHeader-iGIo1Pxf.js"
  },
  "/assets/PermissionMatrix-DVZfMvCD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcb-WU4I7ANjJBA9kir0l5rRMsW+AlM"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 3531,
    "path": "../public/assets/PermissionMatrix-DVZfMvCD.js"
  },
  "/assets/PayrollRunStatusBadge-CmQWTSl0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-+/29+uvlv2nEnq6fjrWsRTZPkBg"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 277,
    "path": "../public/assets/PayrollRunStatusBadge-CmQWTSl0.js"
  },
  "/assets/PhoneInput-DjFJMJgV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e1-2u5MTOC+5LhJbOZTl8ofi4TSapI"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1249,
    "path": "../public/assets/PhoneInput-DjFJMJgV.js"
  },
  "/assets/ProgressBar-CaCWmWVb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c3-xkubkaJwl7+ZpldAfijRvmHlXDs"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 707,
    "path": "../public/assets/ProgressBar-CaCWmWVb.js"
  },
  "/assets/RadioGroup-CMYmXQQs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b8-1L/PVjsDjlNh9vTx3aUmjBF0b08"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1208,
    "path": "../public/assets/RadioGroup-CMYmXQQs.js"
  },
  "/assets/RatingInput-DqB0h_kA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3dc-KoMzzbiDJquwvF2M5igdw6XgO/I"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 988,
    "path": "../public/assets/RatingInput-DqB0h_kA.js"
  },
  "/assets/RegularizationStatusBadge-DdMjUrxi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14d-e0BEBr+AwoRPbxu+m2A6jcQVej4"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 333,
    "path": "../public/assets/RegularizationStatusBadge-DdMjUrxi.js"
  },
  "/assets/RejectionDialog-DEguQRZd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d3a-pK3wrALLuzWe8cLkuHzw0xtcwRQ"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 3386,
    "path": "../public/assets/RejectionDialog-DEguQRZd.js"
  },
  "/assets/ReportExportMenu-CZs-TLFD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ce-l4FE3YcZD+kNa52YgEc0dE76JEg"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1486,
    "path": "../public/assets/ReportExportMenu-CZs-TLFD.js"
  },
  "/assets/ReportTable-uEOXX55x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"184-dBpJKbDcda+bdbGzVmWdT7TiOFc"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 388,
    "path": "../public/assets/ReportTable-uEOXX55x.js"
  },
  "/assets/ReviewCycleBadge-CyXorY3L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e7-5+obZnB8kys8O8sx62B1GBSvTMY"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 487,
    "path": "../public/assets/ReviewCycleBadge-CyXorY3L.js"
  },
  "/assets/ReviewFormRenderer-BFm6p0F6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e31-8IxdeU/33qC0TVqtQsc2za9E6L0"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 3633,
    "path": "../public/assets/ReviewFormRenderer-BFm6p0F6.js"
  },
  "/assets/ReviewStatusBadge-D37lidjw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-0TawH/hx+QIceKmAnAyIn7ixDnE"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 384,
    "path": "../public/assets/ReviewStatusBadge-D37lidjw.js"
  },
  "/assets/RoleBadge-tjBfqWIP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"218-dOexT9topNkkHGV9q90nqn9bvgM"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 536,
    "path": "../public/assets/RoleBadge-tjBfqWIP.js"
  },
  "/assets/RoleAssignmentRow-DslIBcg5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5c1-tnV2/Yh7oGxTkzdYMZsdnK+hAOU"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1473,
    "path": "../public/assets/RoleAssignmentRow-DslIBcg5.js"
  },
  "/assets/SearchInput-DdrQsFGW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"45d-FeVfYN5JSoZ3gcp3YsQ7YvLmKWQ"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1117,
    "path": "../public/assets/SearchInput-DdrQsFGW.js"
  },
  "/assets/SalaryBreakupTable-BE6CcCx9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7ff-993ybXMguj2d3ZqX/IgzvPXKJlM"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 2047,
    "path": "../public/assets/SalaryBreakupTable-BE6CcCx9.js"
  },
  "/assets/Select-DgtqEZoP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3b1-tF1GKT4eaDBI0E0gZMxO0FKkcDU"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 945,
    "path": "../public/assets/Select-DgtqEZoP.js"
  },
  "/assets/SlideOver-NjLqEbj5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"620-AKDZf7V4sFE1RMvyhGHwideqEew"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 1568,
    "path": "../public/assets/SlideOver-NjLqEbj5.js"
  },
  "/assets/StatCard-AmuqfBUA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"963-na11aZLgyAsvbHlDLUupIIjZZgQ"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 2403,
    "path": "../public/assets/StatCard-AmuqfBUA.js"
  },
  "/assets/StepAccessReview-Ca_CsZBK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"49de-f5d9k/HRAzyc8pBU80kAZBzWd/8"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 18910,
    "path": "../public/assets/StepAccessReview-Ca_CsZBK.js"
  },
  "/assets/Tabs-BT4utUR5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73b-UMthqicwpIdMY8DVTgcPSag8dBY"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1851,
    "path": "../public/assets/Tabs-BT4utUR5.js"
  },
  "/assets/StepIndicator-CCSAmUsJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"368-+UbzoF8gTwA94CgJJLKV6IiRY4k"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 872,
    "path": "../public/assets/StepIndicator-CCSAmUsJ.js"
  },
  "/assets/TenantTable-C9eSFoGB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"163a-AmqMyD2unFla3tKrb9PyxrwQlGU"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 5690,
    "path": "../public/assets/TenantTable-C9eSFoGB.js"
  },
  "/assets/TenantStatusBadge-COdPBNt1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"170-QWSqi9vlN8A54nqHIIfxuCc44rM"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 368,
    "path": "../public/assets/TenantStatusBadge-COdPBNt1.js"
  },
  "/assets/Textarea-CbG0-ny2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-CsQTE8cNkl/XtZy8DNP49iAtdaA"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 837,
    "path": "../public/assets/Textarea-CbG0-ny2.js"
  },
  "/assets/ThemePreview-BPthht2r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6d3-4Sy4bx2e9TqKYAnmsYMN11HzojA"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1747,
    "path": "../public/assets/ThemePreview-BPthht2r.js"
  },
  "/assets/Toggle-ChgIAmry.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37c-ZoXBChqiRspQ9DWpA/R+j3pRxDE"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 892,
    "path": "../public/assets/Toggle-ChgIAmry.js"
  },
  "/assets/TimePicker-Dv2jBOVd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"370-q1wyeUSHfqDtjL5Cw9/ZwpRPqP8"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 880,
    "path": "../public/assets/TimePicker-Dv2jBOVd.js"
  },
  "/assets/_admin.admin.dashboard-DQI4Z9kY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22c-GKXdO6rUAo1ugjml6Y2oNSJZ7T4"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 556,
    "path": "../public/assets/_admin.admin.dashboard-DQI4Z9kY.js"
  },
  "/assets/_admin-lyX3zs9t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb9-bJuVMusK6SPYM7cRBXqT8NmwEPo"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 3257,
    "path": "../public/assets/_admin-lyX3zs9t.js"
  },
  "/assets/Toast-BW5SdlXN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72-ueMEpt5RskGVL7VXiTx9Qn8Tz04"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 114,
    "path": "../public/assets/Toast-BW5SdlXN.js"
  },
  "/assets/_admin.admin.login-BU495bs2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94a-iTvILK4H6RmsAhAGjVxx1V5hL2E"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 2378,
    "path": "../public/assets/_admin.admin.login-BU495bs2.js"
  },
  "/assets/_admin.admin.tenants-_TcoPzDj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"547-liQdxSFt/jmKNanS075VkfeLIq4"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1351,
    "path": "../public/assets/_admin.admin.tenants-_TcoPzDj.js"
  },
  "/assets/_admin.admin.dashboard-feZN8WN1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"941-+mCrdA9MUcrj1xPOUM4d05OGeoA"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 2369,
    "path": "../public/assets/_admin.admin.dashboard-feZN8WN1.js"
  },
  "/assets/_admin.admin.settings-autYwbD0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f-xU2FlGhQUUo4eMfNDO0PcDZwV6E"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 2623,
    "path": "../public/assets/_admin.admin.settings-autYwbD0.js"
  },
  "/assets/_admin.admin.tenants._tenantId-CLYBF7iR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1890-mY7r6YN/LNylPxA8/4MHcWrnxPc"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 6288,
    "path": "../public/assets/_admin.admin.tenants._tenantId-CLYBF7iR.js"
  },
  "/assets/_admin.admin.tenants.new-BPwEb3U4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"104e-P1SE3atrmhTnF/jEvz6q7ATPufc"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 4174,
    "path": "../public/assets/_admin.admin.tenants.new-BPwEb3U4.js"
  },
  "/assets/_app-BJYQ8kEn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14214-ixRvkbPqMPjX59MXmHyF6hSDjRs"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 82452,
    "path": "../public/assets/_app-BJYQ8kEn.js"
  },
  "/assets/_app.ai-assistant-9EGlmGVI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1184-ND3Q6q965z9FDgj5p3gtDjh6/6Q"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 4484,
    "path": "../public/assets/_app.ai-assistant-9EGlmGVI.js"
  },
  "/assets/_app.announcements-Ct3i3aSc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"82f-CJ7Rf7PrxuolwRqW1Tdr04n6WHw"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 2095,
    "path": "../public/assets/_app.announcements-Ct3i3aSc.js"
  },
  "/assets/_app.attendance.index-C0qfnNdC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4bc5-w0/fds+Z58yKVE/aHjFklZ25ouw"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 19397,
    "path": "../public/assets/_app.attendance.index-C0qfnNdC.js"
  },
  "/assets/_app.attendance.records-Bk3jgVQm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21e3-zO6Kw0CKGdYd2KU96BwEPoOZ0dE"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 8675,
    "path": "../public/assets/_app.attendance.records-Bk3jgVQm.js"
  },
  "/assets/_app.attendance.regularization-BA9ND-LQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c89-Jcm+OohYe53b0COYXgCY2tzjeo4"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 3209,
    "path": "../public/assets/_app.attendance.regularization-BA9ND-LQ.js"
  },
  "/assets/_app.attendance.regularization.approvals-EeIR9yiK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e41-iODJVFT9jZCjdZnhh8OdwBXFMRQ"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 7745,
    "path": "../public/assets/_app.attendance.regularization.approvals-EeIR9yiK.js"
  },
  "/assets/_app.attendance.regularization.index-CkFhYoAJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3322-LkyRszaXWBMV9hrs11P7vYJ3sjc"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 13090,
    "path": "../public/assets/_app.attendance.regularization.index-CkFhYoAJ.js"
  },
  "/assets/_app.attendance.team-C_19ObmW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10f8-RAB7MAkeoxRo2+5icyZBRuWoB9w"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 4344,
    "path": "../public/assets/_app.attendance.team-C_19ObmW.js"
  },
  "/assets/_app.candidates._candidateId-C5FcQhvJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"908d-KErJ4MNbySDZOUnNXCTxWoXhS6U"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 37005,
    "path": "../public/assets/_app.candidates._candidateId-C5FcQhvJ.js"
  },
  "/assets/_app.candidates.index-DYZi9XhV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"332d-4O82py/aokQCv57mwUHYahIGS1c"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 13101,
    "path": "../public/assets/_app.candidates.index-DYZi9XhV.js"
  },
  "/assets/_app.candidates.invite-pvuLVN0F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a0-JgNI4xX3+nimDvgtYQyrc4BOdLQ"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 4768,
    "path": "../public/assets/_app.candidates.invite-pvuLVN0F.js"
  },
  "/assets/_app.dashboard-DeU7iijk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7958-y2VyUwIIUTuiyvBkkpYNaPyizao"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 31064,
    "path": "../public/assets/_app.dashboard-DeU7iijk.js"
  },
  "/assets/_app.employees-BWS7uVY4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-05MjgjCX8KM0cE3Gy4pHDHLI/Qo"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 95,
    "path": "../public/assets/_app.employees-BWS7uVY4.js"
  },
  "/assets/_app.employees._employeeId.edit-C7TAADRy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c3c-A+AgBiL3taJHontJlxv3I/RFlhI"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 3132,
    "path": "../public/assets/_app.employees._employeeId.edit-C7TAADRy.js"
  },
  "/assets/_app.employees._employeeId-DNAtdaOT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"97b8-kkHlG22BA9wLKaPukcpyZQb9IyU"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 38840,
    "path": "../public/assets/_app.employees._employeeId-DNAtdaOT.js"
  },
  "/assets/_app.employees.index-uIyLvnIT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c14-fmvv6ufDICrHJlU3p962oa5Lh4A"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 15380,
    "path": "../public/assets/_app.employees.index-uIyLvnIT.js"
  },
  "/assets/_app.employees.new-DBfP_LC7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1b-SzVojzknEVWe2wpYY0Q/MDO9tn8"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 3867,
    "path": "../public/assets/_app.employees.new-DBfP_LC7.js"
  },
  "/assets/_app.expenses.index-CiybBftt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c49-Lq9yPDJPz5RYrwNLCnAXEztZOhg"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 3145,
    "path": "../public/assets/_app.expenses.index-CiybBftt.js"
  },
  "/assets/_app.expenses.new-CYPOV9nw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9ea-ekwE4rgGbTz7/XEKXyVJFskVtTs"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 2538,
    "path": "../public/assets/_app.expenses.new-CYPOV9nw.js"
  },
  "/assets/_app.helpdesk.new-BSGxk96T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"99a-49F+2WaluUkWt2d5s6YYOFrqncQ"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 2458,
    "path": "../public/assets/_app.helpdesk.new-BSGxk96T.js"
  },
  "/assets/_app.helpdesk.index-DaK3cT2y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145d-f+ly5FqjYNzRr3TCRcfOpi+w1U0"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 5213,
    "path": "../public/assets/_app.helpdesk.index-DaK3cT2y.js"
  },
  "/assets/_app.leave.apply-CBLvrKt9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4a92-jZBDVORL0OvI8issnQ080Sf/l60"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 19090,
    "path": "../public/assets/_app.leave.apply-CBLvrKt9.js"
  },
  "/assets/_app.leave.approvals-CK1YlDmM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"179e-Jg0U3S90UH39x4YUQiMbnvvSRr4"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 6046,
    "path": "../public/assets/_app.leave.approvals-CK1YlDmM.js"
  },
  "/assets/_app.leave.balances-D6DUmvwb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1f-khf0YIWq6UBbo/dJzr0tjQT60mU"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 2847,
    "path": "../public/assets/_app.leave.balances-D6DUmvwb.js"
  },
  "/assets/_app.leave.calendar-BiF9zXkA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1045-mEEUVEdDnxxnsI7z6TA1PzmA2p4"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 4165,
    "path": "../public/assets/_app.leave.calendar-BiF9zXkA.js"
  },
  "/assets/_app.leave.requests-BCS6qNxG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d23-9pVD/Bh7eJh9jXp19iki08zP/sM"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 7459,
    "path": "../public/assets/_app.leave.requests-BCS6qNxG.js"
  },
  "/assets/_app.me-r5SlCRbX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d38-avQ3lCEBPLn+2vsy0xd5pc2yuYQ"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 11576,
    "path": "../public/assets/_app.me-r5SlCRbX.js"
  },
  "/assets/_app.leave.index-CsIxRY0B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e50-indOoa89y9HyLnpqKO71h9mY/D0"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 3664,
    "path": "../public/assets/_app.leave.index-CsIxRY0B.js"
  },
  "/assets/_app.notifications-CSVFrcpw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1a-Y8UU1BqjsdCWyPAVK2lIKdvEIZ0"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 2842,
    "path": "../public/assets/_app.notifications-CSVFrcpw.js"
  },
  "/assets/_app.payroll.index-CsmawLOT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cec-fOW9Dr80qNoYj733F9NWdQlNx08"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 3308,
    "path": "../public/assets/_app.payroll.index-CsmawLOT.js"
  },
  "/assets/_app.org-chart-BH5kd90e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1178-GN+ZvVhSJNADjr8yhpnMC2PZcwk"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 4472,
    "path": "../public/assets/_app.org-chart-BH5kd90e.js"
  },
  "/assets/_app.payroll.payslips-Cn-lVXZY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bcb-jn37cqBKfitFPveeSMsXqNUGWH8"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 3019,
    "path": "../public/assets/_app.payroll.payslips-Cn-lVXZY.js"
  },
  "/assets/_app.payroll.declarations-CNLAv1Up.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e94-PhO3iKY04ZtW7G0jO+d3O4yxbDc"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 3732,
    "path": "../public/assets/_app.payroll.declarations-CNLAv1Up.js"
  },
  "/assets/_app.payroll.runs._runId-CgBTM5rQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"339f-NB06hpf/vLyJYMbw/S/XOF6SThM"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 13215,
    "path": "../public/assets/_app.payroll.runs._runId-CgBTM5rQ.js"
  },
  "/assets/_app.performance.calibration-BV45dkFw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16e1-e0JHi0ZTYO0c/e+H1wPazHcMouk"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 5857,
    "path": "../public/assets/_app.performance.calibration-BV45dkFw.js"
  },
  "/assets/_app.performance.goals-BYVQn1Dq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fff-z+rDPd2WE81H50YQjA+c6RFpjO4"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 8191,
    "path": "../public/assets/_app.performance.goals-BYVQn1Dq.js"
  },
  "/assets/_app.payroll.runs.index-D6QnP1Xi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bc1-Ot8wE/BZeT5E5aKstB+OlPbY6Fw"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 3009,
    "path": "../public/assets/_app.payroll.runs.index-D6QnP1Xi.js"
  },
  "/assets/_app.performance.admin-CDQxy0yN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13ad-K3IWvW/EZFyZygBK/eqPGh0pm5A"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 5037,
    "path": "../public/assets/_app.performance.admin-CDQxy0yN.js"
  },
  "/assets/_app.performance.reviews._reviewId-Cu0Eon73.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"805-QLFdTZZ9SDtpvzzZwzZJvhQHAlI"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 2053,
    "path": "../public/assets/_app.performance.reviews._reviewId-Cu0Eon73.js"
  },
  "/assets/_app.performance.team-BagkRK2V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd9-cTb23Vp9scftrcvjnmT38dH01Xg"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 3289,
    "path": "../public/assets/_app.performance.team-BagkRK2V.js"
  },
  "/assets/_app.performance.reviews-COedEQQf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"250f-Vt5w1AVan9nvSBGWX8f8gzdZy6o"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 9487,
    "path": "../public/assets/_app.performance.reviews-COedEQQf.js"
  },
  "/assets/_app.performance.team._employeeId-Dw9Acirt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28ae-ptcc9n+uqzGKaB1olNX6A5OT/PI"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 10414,
    "path": "../public/assets/_app.performance.team._employeeId-Dw9Acirt.js"
  },
  "/assets/_app.reports._reportSlug-CFMY0dMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-ytvT7d0iJVgnE2W731zFozD2uQo"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 564,
    "path": "../public/assets/_app.reports._reportSlug-CFMY0dMo.js"
  },
  "/assets/_app.reports._reportSlug-BAaSB2Lt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126d-/3n+66+ho+IbaP2GssfaASoJz8s"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 4717,
    "path": "../public/assets/_app.reports._reportSlug-BAaSB2Lt.js"
  },
  "/assets/_app.reports.builder._reportId-CUUj_atA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-lrp/S+luVDc5UeWGMx2k1h0DdcI"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 564,
    "path": "../public/assets/_app.reports.builder._reportId-CUUj_atA.js"
  },
  "/assets/_app.reports.builder._reportId-BcQh7uNI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91b-0mSPWmCXcjaorcDHqX7La9waIaE"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 2331,
    "path": "../public/assets/_app.reports.builder._reportId-BcQh7uNI.js"
  },
  "/assets/_app.performance.index-D1Q48RaQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5eab7-JAYvYia4oaCTXqZx3zd6RBmypIs"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 387767,
    "path": "../public/assets/_app.performance.index-D1Q48RaQ.js"
  },
  "/assets/_app.reports.builder.index-8lrvI2ex.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5cb-qP/LvdgJ3qYV2/xsWnwWD7oR9cM"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 1483,
    "path": "../public/assets/_app.reports.builder.index-8lrvI2ex.js"
  },
  "/assets/_app.reports.index-DDRkCH2s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-V6tWv9WeBKseJRWorHJtcNtZjyA"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 564,
    "path": "../public/assets/_app.reports.index-DDRkCH2s.js"
  },
  "/assets/_app.settings-DZw8P8XL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1019-BNx+1j5NTIlfT+CabEsV2c4YNCc"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 4121,
    "path": "../public/assets/_app.settings-DZw8P8XL.js"
  },
  "/assets/_app.reports.index-CsmoVIyh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e87-YmQJnPUAoGT6EUQ0WYmBdeNNIUo"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 7815,
    "path": "../public/assets/_app.reports.index-CsmoVIyh.js"
  },
  "/assets/_app.settings.attendance-DTPSJt1l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d03-H73739z4w33wt3GSWTW6rG4JYJw"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 7427,
    "path": "../public/assets/_app.settings.attendance-DTPSJt1l.js"
  },
  "/assets/_app.settings.company-Hl2OerMf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"955-5E2fd0rBGlUhGkYqUAhYD9638Ac"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 2389,
    "path": "../public/assets/_app.settings.company-Hl2OerMf.js"
  },
  "/assets/_app.reports.builder.index-BtXOSR69.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23b-Tr2dNVkkelpG7AHDS6faTKc9b/A"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 571,
    "path": "../public/assets/_app.reports.builder.index-BtXOSR69.js"
  },
  "/assets/_app.settings.forms._formId.index-DAcWN7A7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5746-mGdcTrEmD4TbCjw5eH86bZ17LtY"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 22342,
    "path": "../public/assets/_app.settings.forms._formId.index-DAcWN7A7.js"
  },
  "/assets/_app.settings.forms._formId.preview-CQoDGTPM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ff-VScc9h0aPN1HRIRnTZVdb5SN4yM"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 1535,
    "path": "../public/assets/_app.settings.forms._formId.preview-CQoDGTPM.js"
  },
  "/assets/_app.settings.company.designations-CdWJa08K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fdf-j2AsR5poULlJ6G+GIWbi4DWMpXw"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 4063,
    "path": "../public/assets/_app.settings.company.designations-CdWJa08K.js"
  },
  "/assets/_app.settings.forms._formId.submissions-2laAFI8Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bf9-6dzd78ArvB7mtvVM90obiFSwH+U"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 3065,
    "path": "../public/assets/_app.settings.forms._formId.submissions-2laAFI8Y.js"
  },
  "/assets/_app.settings.forms.index-BvfoFik1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126f-fxXlrBJPAIkPopxk4CI2mXz6YeQ"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 4719,
    "path": "../public/assets/_app.settings.forms.index-BvfoFik1.js"
  },
  "/assets/_app.settings.forms.new-CWjf4qze.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"251-ylhfY4o4JC9HqLcH/27FKfbFr74"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 593,
    "path": "../public/assets/_app.settings.forms.new-CWjf4qze.js"
  },
  "/assets/_app.settings.leave.policies-C7vT--1B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1963-6Z/AGb2xpP4LFkpuK8QYkTWkBXA"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 6499,
    "path": "../public/assets/_app.settings.leave.policies-C7vT--1B.js"
  },
  "/assets/_app.settings.payroll.index-fa_xqz-j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2756-l8iBuquuUEP1bl0txbdAi+wXMjQ"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 10070,
    "path": "../public/assets/_app.settings.payroll.index-fa_xqz-j.js"
  },
  "/assets/_app.settings.leave.index-CmpSJCa-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2374-TXOW3Ul0aEc8G3MtfXgvYSxjn/g"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 9076,
    "path": "../public/assets/_app.settings.leave.index-CmpSJCa-.js"
  },
  "/assets/_app.settings.roles-h4cUmb-c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"687-T8kwKTmUbt8C8G9ERNF0SRwUrwk"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 1671,
    "path": "../public/assets/_app.settings.roles-h4cUmb-c.js"
  },
  "/assets/_app.settings.payroll.structures-CX4zkwjS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16ed-d1gz8PeP63eNdCCCFwxljLlDtF4"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 5869,
    "path": "../public/assets/_app.settings.payroll.structures-CX4zkwjS.js"
  },
  "/assets/_app.settings.roles._roleId.index-BOVp8B6B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d25-KOTUqq8LpRz10765jFvzAJkQiLY"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 3365,
    "path": "../public/assets/_app.settings.roles._roleId.index-BOVp8B6B.js"
  },
  "/assets/_app.settings.roles._roleId.edit-BVgzSlYC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"608-zBwcryc4aZPp0tyc+hh8IcTmsec"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 1544,
    "path": "../public/assets/_app.settings.roles._roleId.edit-BVgzSlYC.js"
  },
  "/assets/_app.settings.company.work-calendar-COtz8jeY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b8-96gv2XiHQ1azuzhfUvs4xjq92V8"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 5048,
    "path": "../public/assets/_app.settings.company.work-calendar-COtz8jeY.js"
  },
  "/assets/_app.settings.roles.assignments-DVt_iDPl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bd0-Fg3d+IARYQU3bUvg+K9XP+GGDA4"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 3024,
    "path": "../public/assets/_app.settings.roles.assignments-DVt_iDPl.js"
  },
  "/assets/_app.settings.company.holidays-C9k7imc0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-8dfiw/neNYQMmc3t2RkwlKTLYDw"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.company.holidays-C9k7imc0.js"
  },
  "/assets/_app.settings.company.departments-BrQYc1A1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"def-kr/ETgjsA+QPENnN5+cBacTdnII"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 3567,
    "path": "../public/assets/_app.settings.company.departments-BrQYc1A1.js"
  },
  "/assets/_app.settings.roles.audit-CZSbcbei.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9dc-+zK4+5U36+L5O/dOfzyN4n5A2eY"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 2524,
    "path": "../public/assets/_app.settings.roles.audit-CZSbcbei.js"
  },
  "/assets/_app.settings.hiring.rejection-reasons-Dkz8qAzu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"114b-l+BGMuhGPBW1Benh1m2kWWsQnTg"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 4427,
    "path": "../public/assets/_app.settings.hiring.rejection-reasons-Dkz8qAzu.js"
  },
  "/assets/_app.settings.roles.index-DbAwec8m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f2-ruaa9PZ92ztrEoTR07FK65B40RU"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 4594,
    "path": "../public/assets/_app.settings.roles.index-DbAwec8m.js"
  },
  "/assets/_app.settings.roles.new-fsRjtBX5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94f-B6Gl5keixoLjCTLiCQitke/izjs"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 2383,
    "path": "../public/assets/_app.settings.roles.new-fsRjtBX5.js"
  },
  "/assets/_platform-qu1Ed3b0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"351-4CmG2xb9OgWyHOf5WmDcP5Inapo"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 849,
    "path": "../public/assets/_platform-qu1Ed3b0.js"
  },
  "/assets/_platform.onboarding-Df9Wb_B4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcc-1fjV958CWB9muyW8vwRcrmfvlZY"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 3532,
    "path": "../public/assets/_platform.onboarding-Df9Wb_B4.js"
  },
  "/assets/_platform.login-CEtEwolL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12ee-TPgZRJCvweRzF5wGFWESKuruOW0"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 4846,
    "path": "../public/assets/_platform.login-CEtEwolL.js"
  },
  "/assets/_app.settings.roles.delegation-C8DChVSa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-YCjgI0X+bdI0H2DWa0DnGGi5lJo"',
    "mtime": "2026-08-12T04:41:05.480Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.roles.delegation-C8DChVSa.js"
  },
  "/assets/_platform.onboarding.review-Dgr33kWN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"122f-WIRT0F/1k6+0PR8rMpOTFd4Ldig"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 4655,
    "path": "../public/assets/_platform.onboarding.review-Dgr33kWN.js"
  },
  "/assets/_platform.onboarding.brand-DP_vTait.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10b3-G4TovyAAcMIfDewKBAts8XtF9SY"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 4275,
    "path": "../public/assets/_platform.onboarding.brand-DP_vTait.js"
  },
  "/assets/_platform.onboarding.admin-DJS-jnuP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc6-i24WK35vqEV48SYTEifZPDtXInQ"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 3526,
    "path": "../public/assets/_platform.onboarding.admin-DJS-jnuP.js"
  },
  "/assets/_portal.portal._pipelineId.index-C9VlkHzd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a78-ux/PcrK9eQExWJodkE/js7S1Blg"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 6776,
    "path": "../public/assets/_portal.portal._pipelineId.index-C9VlkHzd.js"
  },
  "/assets/_portal.portal._pipelineId.offer-DnZKXNo4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"30d-Ip9qYbshguzBxGoyJWZAKhE57fc"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 781,
    "path": "../public/assets/_portal.portal._pipelineId.offer-DnZKXNo4.js"
  },
  "/assets/ai-DhQAcVKS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2138-rM4soH/V0lmEtQpxK7p6H/0mosU"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 8504,
    "path": "../public/assets/ai-DhQAcVKS.js"
  },
  "/assets/admin-DqrExEZO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147c-VpDlRbJMUa+aKwsTkvUXl8brZmg"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 5244,
    "path": "../public/assets/admin-DqrExEZO.js"
  },
  "/assets/arrow-up-right-CeARbBJ3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-L2kX5mf0o/cM8c8jwyFNePRdVGA"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 179,
    "path": "../public/assets/arrow-up-right-CeARbBJ3.js"
  },
  "/assets/_portal-BsqTGXYb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"76e-0w1t1yDsUdF6JchWa1Q3arSqOlM"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 1902,
    "path": "../public/assets/_portal-BsqTGXYb.js"
  },
  "/assets/_portal.portal.index-CTWp1d7u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"737-AT/xMF+d2Ct7NJOlYYQBtRRaia4"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1847,
    "path": "../public/assets/_portal.portal.index-CTWp1d7u.js"
  },
  "/assets/auth-0LdWJ2FW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"43b-QjVBd0RDyIhSXTJcEl10FiFG+/k"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1083,
    "path": "../public/assets/auth-0LdWJ2FW.js"
  },
  "/assets/attendance-BkGJE-Ur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"203-0EXbj37NyqpH57BjGAUI+2GnWk0"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 515,
    "path": "../public/assets/attendance-BkGJE-Ur.js"
  },
  "/assets/_portal.portal._pipelineId.form-C3ot6B4V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f7-KNpwt3GfXRH6qzSukSJFWG+SInQ"',
    "mtime": "2026-08-12T04:41:05.479Z",
    "size": 2551,
    "path": "../public/assets/_portal.portal._pipelineId.form-C3ot6B4V.js"
  },
  "/assets/auth-Bekfx_ae.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"443-QGVBtlWm16J3p1Yu5L2prbt1hag"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1091,
    "path": "../public/assets/auth-Bekfx_ae.js"
  },
  "/assets/award-BQ6ldDbH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"119-xSo+YYQQcTHysU2pcWRcpYTHFu0"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 281,
    "path": "../public/assets/award-BQ6ldDbH.js"
  },
  "/assets/bell-Ds7QKDqh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-HJkfwZSpeDIu1N1wddKpBXOTJS8"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 302,
    "path": "../public/assets/bell-Ds7QKDqh.js"
  },
  "/assets/calendar-BP1LYX2b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d-NPK74HPnNmdjLL3rg85jsvK0gWA"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 269,
    "path": "../public/assets/calendar-BP1LYX2b.js"
  },
  "/assets/briefcase-Cn55_9FR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-X5yhIHTVpXXSIcSasBPAah4vxSM"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 232,
    "path": "../public/assets/briefcase-Cn55_9FR.js"
  },
  "/assets/calendar-days-BOaeaALp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-rYsVAVOvGynhETOUc6q/dSwj0IU"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 506,
    "path": "../public/assets/calendar-days-BOaeaALp.js"
  },
  "/assets/candidate-iiHXj_aH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"694-TLQ8S1zSZp6FoBIxKkA8GCCPpmY"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 1684,
    "path": "../public/assets/candidate-iiHXj_aH.js"
  },
  "/assets/chart-column-C7PnyhU4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-PTLUCitZAy57cwqotW6Rcuo+e3k"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 263,
    "path": "../public/assets/chart-column-C7PnyhU4.js"
  },
  "/assets/chevron-right-CKtSenvs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e0-1pUOSUld93L0ipdHUCFXvz0bFOU"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 224,
    "path": "../public/assets/chevron-right-CKtSenvs.js"
  },
  "/assets/candidates-BEyZ6Q4B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2687-PSa9CWzGq5uLHSNjzT7quAESOwg"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 9863,
    "path": "../public/assets/candidates-BEyZ6Q4B.js"
  },
  "/assets/check-ByMGlcLJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-WnZJkdNX42YasZDbphX8gmI/tuk"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 131,
    "path": "../public/assets/check-ByMGlcLJ.js"
  },
  "/assets/circle-alert-BEskbarl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"106-9sqOpBkGFkpJHxQweIk0zaj9YC0"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 262,
    "path": "../public/assets/circle-alert-BEskbarl.js"
  },
  "/assets/circle-check-DoSxY68F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9-tSAxpLu89AWAOWHlpR8vCTnMgNY"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 185,
    "path": "../public/assets/circle-check-DoSxY68F.js"
  },
  "/assets/chevron-down-DZoVgGRk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c-NkuExb33KVO+i7AbnJ/34mVPrwc"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 140,
    "path": "../public/assets/chevron-down-DZoVgGRk.js"
  },
  "/assets/clock-aQ8eNnya.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0-RHjf+bI6s4Yd/vBTzg7MUgyjJrc"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 176,
    "path": "../public/assets/clock-aQ8eNnya.js"
  },
  "/assets/createLucideIcon-CMDz2xvM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-uAzcv/6+h0LI0hBqmzLqcawHSO8"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 1202,
    "path": "../public/assets/createLucideIcon-CMDz2xvM.js"
  },
  "/assets/defaults-jxLY-CuN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"92-jIaGhVbZmJGfP4EH8xp1SjanFKI"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 146,
    "path": "../public/assets/defaults-jxLY-CuN.js"
  },
  "/assets/dollar-sign-CNgjLmgb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e7-nVI6KIbMqThnSPa4ol/8UkaDG98"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 231,
    "path": "../public/assets/dollar-sign-CNgjLmgb.js"
  },
  "/assets/employee-DXwVkTp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dd-dzLDMZWdD3CU9q8o7uFJvdLd/64"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 221,
    "path": "../public/assets/employee-DXwVkTp3.js"
  },
  "/assets/ellipsis-BlVuTBFK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-MZHyYYNUmt5ZM/GyQRqfX084V/U"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 233,
    "path": "../public/assets/ellipsis-BlVuTBFK.js"
  },
  "/assets/file-text-ChDosIE4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18d-GrKwuvETgDfCHbXQ7nsSTGGcUi8"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 397,
    "path": "../public/assets/file-text-ChDosIE4.js"
  },
  "/assets/ess-CeCy67nS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"309-EMXSKuzcxAlyp3Quovw5/44Vq0A"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 777,
    "path": "../public/assets/ess-CeCy67nS.js"
  },
  "/assets/forms-GY5zi63h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c0a-PKSU38wakqwBB9Zy4JBwWxxQGSk"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 3082,
    "path": "../public/assets/forms-GY5zi63h.js"
  },
  "/assets/formConditions-B3k6BsX0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12c1-WqApgUEHSWu9rqZGbNRzJQKAQCg"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 4801,
    "path": "../public/assets/formConditions-B3k6BsX0.js"
  },
  "/assets/index-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 41,
    "path": "../public/assets/index-DtqBFgK5.js"
  },
  "/assets/leave-BMGK6tPz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-UCtrj5+BEw2zaCk0BGm1Hr3FAoI"',
    "mtime": "2026-08-12T04:41:05.476Z",
    "size": 386,
    "path": "../public/assets/leave-BMGK6tPz.js"
  },
  "/assets/funnel-DUP7nH9m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-Z3AE8zs2WwKZCSlmQroB4mJ2JwY"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 263,
    "path": "../public/assets/funnel-DUP7nH9m.js"
  },
  "/assets/lock-DKiX8Lyi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d5-tLvLSLdRO/MLqoga68zHQLoPrD0"',
    "mtime": "2026-08-12T04:41:05.472Z",
    "size": 213,
    "path": "../public/assets/lock-DKiX8Lyi.js"
  },
  "/assets/onboarding-BoFhlvmm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fa-Uff0B8pPBxLjwMZXeFA1T0VOWUM"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1530,
    "path": "../public/assets/onboarding-BoFhlvmm.js"
  },
  "/assets/localStorage-BwOw2TLD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174a-Htd5ev8Dsbw2Lm/2gQryaUjGR/A"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 5962,
    "path": "../public/assets/localStorage-BwOw2TLD.js"
  },
  "/assets/index-DlX_L1Z2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94317-f8mpq2PbVfBTFyHSmyUyQKuLNtY"',
    "mtime": "2026-08-12T04:41:05.481Z",
    "size": 606999,
    "path": "../public/assets/index-DlX_L1Z2.js"
  },
  "/assets/performance-DtSari8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"246-hEuMcNKrgX+fZITKlA41iSBTWhc"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 582,
    "path": "../public/assets/performance-DtSari8d.js"
  },
  "/assets/pen-line-ieXzhgBt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"121-M6jsMdQh1o2XGQbCYm+pXMN2S7o"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 289,
    "path": "../public/assets/pen-line-ieXzhgBt.js"
  },
  "/assets/rbac-kzVlURvs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d1-X20Hrz9hL4a10jvGOq4gpJiStCU"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 209,
    "path": "../public/assets/rbac-kzVlURvs.js"
  },
  "/assets/plus-l-6Nf6ZM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-TKBr5aMcQrVaGdT0IkGYwZ0b5f0"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 165,
    "path": "../public/assets/plus-l-6Nf6ZM.js"
  },
  "/assets/rbac-PoQR3B8i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2455-ctJe/4LtdUu9KyNsGpWzBdKWkm8"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 9301,
    "path": "../public/assets/rbac-PoQR3B8i.js"
  },
  "/assets/search-E3UbWjpa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-+T3GAJIa9+mZQhG+UqvjuKtinjE"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 181,
    "path": "../public/assets/search-E3UbWjpa.js"
  },
  "/assets/send-Cfp6KYSD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-S9gpecRv94I2encUGAyktQ9+UgM"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 302,
    "path": "../public/assets/send-Cfp6KYSD.js"
  },
  "/assets/shield-alert-CM-eJoFF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d-yoU8ZPfzj2ndSnHjQidJVaSnlmg"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 365,
    "path": "../public/assets/shield-alert-CM-eJoFF.js"
  },
  "/assets/shield-check-DRQq86ZY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147-J6vAVFRHMi6Vec22R71Z3Z32fuo"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 327,
    "path": "../public/assets/shield-check-DRQq86ZY.js"
  },
  "/assets/sparkles-DmbLTw1Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-oitnUR0VQ15zLB5JQV2Kra/GieY"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 506,
    "path": "../public/assets/sparkles-DmbLTw1Y.js"
  },
  "/assets/square-check-big-CNLx3TPY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1-xzsG9vXTLOzMBk3dVHktnnKVKA0"',
    "mtime": "2026-08-12T04:41:05.478Z",
    "size": 241,
    "path": "../public/assets/square-check-big-CNLx3TPY.js"
  },
  "/assets/square-qriGbsEf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22d-e6+Ut495Lv++KKJxRe0Uo3U1aIU"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 557,
    "path": "../public/assets/square-qriGbsEf.js"
  },
  "/assets/styles-BoiYhMiQ.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2265f-cdb60z5b8reE8R9rJ7r3xxFo5Z4"',
    "mtime": "2026-08-12T04:41:05.467Z",
    "size": 140895,
    "path": "../public/assets/styles-BoiYhMiQ.css"
  },
  "/assets/tenant-B4ACrNXA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a5-GG/IRk93Ae1QVQslXW+o01q7xks"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 677,
    "path": "../public/assets/tenant-B4ACrNXA.js"
  },
  "/assets/tenants-CdBT2AZr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"350-rCfXJdF22+24XKGPe0gc11rP1No"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 848,
    "path": "../public/assets/tenants-CdBT2AZr.js"
  },
  "/assets/target-CfRzAX_K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-39xc3/ulldGqpLcFCn0YSY8K4Gc"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 233,
    "path": "../public/assets/target-CfRzAX_K.js"
  },
  "/assets/triangle-alert-ByH2ANPw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-HoKqj+Cf3NCxmrEqK8xKpvcMETc"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 277,
    "path": "../public/assets/triangle-alert-ByH2ANPw.js"
  },
  "/assets/save-CU8EJvGl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-0UX30XaD766KTgv89eNxGlNemsE"',
    "mtime": "2026-08-12T04:41:05.477Z",
    "size": 339,
    "path": "../public/assets/save-CU8EJvGl.js"
  },
  "/assets/trending-up-VxtayuQy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bb-CeSyxklUxoUCCfHdyatbn/DRYiM"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 187,
    "path": "../public/assets/trending-up-VxtayuQy.js"
  },
  "/assets/useAiChat-DbYEMBap.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2bab-oFN2hEtF/YotHtUEM+m/qURzIRk"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 11179,
    "path": "../public/assets/useAiChat-DbYEMBap.js"
  },
  "/assets/useRouterState-BsS5DGZt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-G90KtV2SRrUFvNKpOBA0pqVjkSw"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 350,
    "path": "../public/assets/useRouterState-BsS5DGZt.js"
  },
  "/assets/useCurrentEmployee-BUC_qLnO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18e-M0Fdq6QzOfkxn3L7NrsDqGRAyy8"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 398,
    "path": "../public/assets/useCurrentEmployee-BUC_qLnO.js"
  },
  "/assets/usePermission-C5eLtO_Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"134-hbj/UahPCQLHffx3K4Iw8GpYKDA"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 308,
    "path": "../public/assets/usePermission-C5eLtO_Q.js"
  },
  "/assets/user-check-_hm9jN_F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-cWqoxbOgOUWZ4LEY3zqTtMLNLVA"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 250,
    "path": "../public/assets/user-check-_hm9jN_F.js"
  },
  "/assets/users-C8ASlMIa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e-jEpN8fmUV2scVKaEj6sJVoxUbB4"',
    "mtime": "2026-08-12T04:41:05.474Z",
    "size": 318,
    "path": "../public/assets/users-C8ASlMIa.js"
  },
  "/assets/utils-kXW4prSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69e-bFIRWVeHky7fyTZGF6zHzjKRO7Y"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 1694,
    "path": "../public/assets/utils-kXW4prSi.js"
  },
  "/assets/x-CPevKKVX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-0nCrzUm6O1RZ/074ZrrCrm18jEM"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 166,
    "path": "../public/assets/x-CPevKKVX.js"
  },
  "/assets/validation-DXwcU1dt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"233-kn/Liu9Jy04Vnk3sBcFFR1+uFy8"',
    "mtime": "2026-08-12T04:41:05.473Z",
    "size": 563,
    "path": "../public/assets/validation-DXwcU1dt.js"
  },
  "/assets/zap-D1s6EST3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"112-5fXK+1Hte+RhoyzYcHNbkuefNZQ"',
    "mtime": "2026-08-12T04:41:05.475Z",
    "size": 274,
    "path": "../public/assets/zap-D1s6EST3.js"
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
