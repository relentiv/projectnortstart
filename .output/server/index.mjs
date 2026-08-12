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
  "/assets/AiBadge-CAPdAx7N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b8-g4ht27p2Dy7ryoCUoqSW+pD40Us"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 184,
    "path": "../public/assets/AiBadge-CAPdAx7N.js"
  },
  "/assets/Alert-C4U7U3mu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d4-z1auTKwPKumDswCWcMiw5W+OP2I"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 724,
    "path": "../public/assets/Alert-C4U7U3mu.js"
  },
  "/assets/AnnouncementCard-BR8LBs2v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-jcWqia0J1cuX90uGeRq/4lw/sGQ"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 1318,
    "path": "../public/assets/AnnouncementCard-BR8LBs2v.js"
  },
  "/assets/AttendanceStatusBadge-CCgAgggM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d2-rpbJVQ8bp6h4+N5bWRaBQxBfS1U"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 466,
    "path": "../public/assets/AttendanceStatusBadge-CCgAgggM.js"
  },
  "/assets/Avatar-B2a4m9ei.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e6-CFMwi7YoaOTOnUETGJPuFOjaIG4"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 486,
    "path": "../public/assets/Avatar-B2a4m9ei.js"
  },
  "/assets/Badge-DmgHk6v7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21f-L2CXE+kZCfB6ixvUHfaRJUH9vbk"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 543,
    "path": "../public/assets/Badge-DmgHk6v7.js"
  },
  "/assets/AttendanceRiskSection-DRvsn2F4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"113d-k1foYOy5eYit/Yx/TldzBIWb9KY"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 4413,
    "path": "../public/assets/AttendanceRiskSection-DRvsn2F4.js"
  },
  "/assets/Button-CwOm5h9k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"522-AnNYlr0eQSaEC5LFWq7EF/BYZBs"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1314,
    "path": "../public/assets/Button-CwOm5h9k.js"
  },
  "/assets/Card-41SCT_GE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f2-vc0gXoEegF3qLc7Evp0AbQlrCAM"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 242,
    "path": "../public/assets/Card-41SCT_GE.js"
  },
  "/assets/Breadcrumb-BVCHqSPA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"298-C23ss3qHe8BmViE2YlKZEP0R3Hs"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 664,
    "path": "../public/assets/Breadcrumb-BVCHqSPA.js"
  },
  "/assets/Checkbox-__zXzQc5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"291-vBzgKHLgveKcesyNhcbTCCy6sEA"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 657,
    "path": "../public/assets/Checkbox-__zXzQc5.js"
  },
  "/assets/ColorPicker-CFHghfuE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4af-zpNNFxViuwxgakOAKB6MCJo/xLs"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1199,
    "path": "../public/assets/ColorPicker-CFHghfuE.js"
  },
  "/assets/CurrencyInput-CL0g8xrh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f3-c+39YNkbyNKKfFMPrQoEPyv0biM"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 1523,
    "path": "../public/assets/CurrencyInput-CL0g8xrh.js"
  },
  "/assets/CustomReportBuilder-Bqm8iAdM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18cf-40fFahW1pzTvtaNTpkEuS/yYY98"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 6351,
    "path": "../public/assets/CustomReportBuilder-Bqm8iAdM.js"
  },
  "/assets/DatePicker-xGVJHAAF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34b-2oZqZMQPUs1FuH3FIZMyfMo+DtE"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 843,
    "path": "../public/assets/DatePicker-xGVJHAAF.js"
  },
  "/assets/DelegationCard-BqRx9xvp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"859-nP1ZVFiW06CEIGFOKssiJHyLQy8"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 2137,
    "path": "../public/assets/DelegationCard-BqRx9xvp.js"
  },
  "/assets/ConfirmDialog-BnhjIj-0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3a1-T4N5as2ahuGcvCd276ki3VLYAz8"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 929,
    "path": "../public/assets/ConfirmDialog-BnhjIj-0.js"
  },
  "/assets/DataTable-DTE3HI1E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa0-hA77uhSQB7oAoWBcaw20RaD3Dqc"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 2720,
    "path": "../public/assets/DataTable-DTE3HI1E.js"
  },
  "/assets/EmployeeAvatar-JitAjPta.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f3-vv6RjijnlAsOKABQQSLh/HSUC+Y"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1523,
    "path": "../public/assets/EmployeeAvatar-JitAjPta.js"
  },
  "/assets/EmployeeStatusBadge-pBscWkti.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"488-mo/0XqwgV4thajjmIg/Gj3CFKAo"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 1160,
    "path": "../public/assets/EmployeeStatusBadge-pBscWkti.js"
  },
  "/assets/FormRenderer-Gkl3tKpj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"342c-rS66rQWGlplF73oJLqx++W5vMBw"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 13356,
    "path": "../public/assets/FormRenderer-Gkl3tKpj.js"
  },
  "/assets/FileUpload-CWTqQOif.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"85b-jNojEUpu6wpyj5jzl0vq0qfmgFI"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 2139,
    "path": "../public/assets/FileUpload-CWTqQOif.js"
  },
  "/assets/EmptyState-Dn7lGEnO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-nidpxoGaqwu6yZ23QB0DcrO748g"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 522,
    "path": "../public/assets/EmptyState-Dn7lGEnO.js"
  },
  "/assets/GoalProgressRing-BWgREKni.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-rJTIf92nd/gEJyhT8maaHEUipyo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 837,
    "path": "../public/assets/GoalProgressRing-BWgREKni.js"
  },
  "/assets/GoalStatusBadge-C7bapG5g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15a-xSRuswgaeeQUWkVcXX/gU1mirnQ"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 346,
    "path": "../public/assets/GoalStatusBadge-C7bapG5g.js"
  },
  "/assets/InfoTooltip-Dc_WUNLN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"304-fCMy124/VLj00h+lMddRe7II/5k"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 772,
    "path": "../public/assets/InfoTooltip-Dc_WUNLN.js"
  },
  "/assets/Input-Bn4IT24F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ca-c3VnmoMPJzFzP6fdFsSLSbgfQlY"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1226,
    "path": "../public/assets/Input-Bn4IT24F.js"
  },
  "/assets/LeaveBalanceCard-fKzR6--G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"872-ODV++FJYSNps6iZNL2dZEU5Enuo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 2162,
    "path": "../public/assets/LeaveBalanceCard-fKzR6--G.js"
  },
  "/assets/LeaveRequestCard-BVRj5e1f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fd-KbGMUnc7sRcpz7XNeDCKiE4Gd18"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1533,
    "path": "../public/assets/LeaveRequestCard-BVRj5e1f.js"
  },
  "/assets/LeaveBalanceGrid-FRHwLANC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e1-P6eCrkJADkELXyIO55E5RA6xOOo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 481,
    "path": "../public/assets/LeaveBalanceGrid-FRHwLANC.js"
  },
  "/assets/LeaveStatusBadge-CoXZ8qSn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-A47ayxG93gJ92aBA4Q6fi4BiQwM"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 353,
    "path": "../public/assets/LeaveStatusBadge-CoXZ8qSn.js"
  },
  "/assets/LeaveTypeBadge-urUVKFRj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d6-K4lm6POP+/aAZnvM28QYqfahCFA"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 470,
    "path": "../public/assets/LeaveTypeBadge-urUVKFRj.js"
  },
  "/assets/ObjectiveCard-IjzmRfqz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd6-IJB8ecknR1VxvHW7P/on0jZdQBM"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 3286,
    "path": "../public/assets/ObjectiveCard-IjzmRfqz.js"
  },
  "/assets/Modal-Bl1WpGYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"319-twgDoVz/Br7dZs6fUnt/BzpzeEk"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 793,
    "path": "../public/assets/Modal-Bl1WpGYa.js"
  },
  "/assets/MultiSelect-D9sOj_K1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"622-w7paaXJNxmg3moShWeWaEo9ucYU"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1570,
    "path": "../public/assets/MultiSelect-D9sOj_K1.js"
  },
  "/assets/PageHeader-C9bWmUlf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c4-aRJeYRpgZ2rp5KYHeb1CZXi+/NM"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 452,
    "path": "../public/assets/PageHeader-C9bWmUlf.js"
  },
  "/assets/PayrollRunCard-CZMsNKnJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ec-MJ188HYgrCAxot89RoU4g3fwafo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1004,
    "path": "../public/assets/PayrollRunCard-CZMsNKnJ.js"
  },
  "/assets/PayrollRunStatusBadge-CAZ7Hfq9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-t8tRP7mXLDB1m4DC4kHPxysgPVg"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 277,
    "path": "../public/assets/PayrollRunStatusBadge-CAZ7Hfq9.js"
  },
  "/assets/PermissionGuard-CcbaX3lJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-isnAWSwK0JFNcOv0MO+DojfeDm0"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 270,
    "path": "../public/assets/PermissionGuard-CcbaX3lJ.js"
  },
  "/assets/PermissionMatrix-hruCNXgz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcb-tgdxFVwcSWCSrbZSFjC+hj+5Yi0"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 3531,
    "path": "../public/assets/PermissionMatrix-hruCNXgz.js"
  },
  "/assets/ProgressBar-DMJjywqb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c3-Rnkc+lLjDnttFA8uWOBceOSEeuc"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 707,
    "path": "../public/assets/ProgressBar-DMJjywqb.js"
  },
  "/assets/RadioGroup-D0-OxoVU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b8-0ct+PyXRgeEufSlz5psFD9XhMZI"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1208,
    "path": "../public/assets/RadioGroup-D0-OxoVU.js"
  },
  "/assets/PhoneInput-SkkURvL6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e1-0aHEuWgXmyE6H9CLMhpX/6Xeruo"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 1249,
    "path": "../public/assets/PhoneInput-SkkURvL6.js"
  },
  "/assets/RatingInput-C_KZt1SV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3dc-P7R+jgdqJ6fdjjpTMLwdnpeE+/E"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 988,
    "path": "../public/assets/RatingInput-C_KZt1SV.js"
  },
  "/assets/ReportExportMenu-CsiCv04T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ce-Numi9PcT8B61bYGeG7BYZkmWMIk"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1486,
    "path": "../public/assets/ReportExportMenu-CsiCv04T.js"
  },
  "/assets/ReportTable-C_6SrYmP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"184-L8sLCiICds0EkhOhBaXaDBGeWT0"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 388,
    "path": "../public/assets/ReportTable-C_6SrYmP.js"
  },
  "/assets/ReviewCycleBadge-BBbElxbr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e7-TetXH+iYJ1h26S/5ICCqTAOgKOY"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 487,
    "path": "../public/assets/ReviewCycleBadge-BBbElxbr.js"
  },
  "/assets/RegularizationStatusBadge-DxwreVQF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14d-aKQueu0uI9ChdsH4o/lSXd1sdBw"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 333,
    "path": "../public/assets/RegularizationStatusBadge-DxwreVQF.js"
  },
  "/assets/ReviewFormRenderer-Cm-kXKmV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e31-R/GU3u3yOTOPXkpHQwi+sUaPFcU"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 3633,
    "path": "../public/assets/ReviewFormRenderer-Cm-kXKmV.js"
  },
  "/assets/RejectionDialog-CgU5f0Lv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d3a-UdulhmES5cp6dpmyvUt5uAlUYpM"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 3386,
    "path": "../public/assets/RejectionDialog-CgU5f0Lv.js"
  },
  "/assets/ReviewStatusBadge-Dij7Wx1b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-rib8D7K2aDPKrRRd9hJCTlT2u20"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 384,
    "path": "../public/assets/ReviewStatusBadge-Dij7Wx1b.js"
  },
  "/assets/RoleAssignmentRow-BaliId2h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5c1-EdllivPHCYzcvlzNC7cr/wq/blY"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 1473,
    "path": "../public/assets/RoleAssignmentRow-BaliId2h.js"
  },
  "/assets/RoleBadge-DU6rwWax.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"218-nX1hmY+FvKsCCLT5aw33hvfGljw"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 536,
    "path": "../public/assets/RoleBadge-DU6rwWax.js"
  },
  "/assets/SalaryBreakupTable-BQ6MWRms.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7ff-3lj8SFwoEC8wcodoS//0cLwfhT4"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 2047,
    "path": "../public/assets/SalaryBreakupTable-BQ6MWRms.js"
  },
  "/assets/SearchInput-BLvb8MPw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"45d-rLPjGzJWR7sdDbSbtWIAQk2wGkQ"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1117,
    "path": "../public/assets/SearchInput-BLvb8MPw.js"
  },
  "/assets/Select-BV9162Fh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3b1-z3Bo6X5ol0pDSyFCLW0lUBWUXGU"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 945,
    "path": "../public/assets/Select-BV9162Fh.js"
  },
  "/assets/SlideOver-B_smv5ZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"620-DrHVaGxgTdeT82bnK+0fCj4KsVA"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1568,
    "path": "../public/assets/SlideOver-B_smv5ZU.js"
  },
  "/assets/StatCard-Baoj0fEO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"963-2kP8qnWenxtM3FWSKJhgYyzGSKk"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 2403,
    "path": "../public/assets/StatCard-Baoj0fEO.js"
  },
  "/assets/StepIndicator-DkvTrQwH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"368-NYmVEYFrgRzPLQ71fZp2T8e/t1E"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 872,
    "path": "../public/assets/StepIndicator-DkvTrQwH.js"
  },
  "/assets/StepAccessReview-Z1kdORMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"49de-hPAl6w/ma4Bv6tHcoPxQjUgUcO8"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 18910,
    "path": "../public/assets/StepAccessReview-Z1kdORMt.js"
  },
  "/assets/Tabs-BuCBmasg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"661-qCLNXthvFWAbM/rlWb0VZ4FTTtE"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 1633,
    "path": "../public/assets/Tabs-BuCBmasg.js"
  },
  "/assets/TenantStatusBadge-DekhKNWt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"170-GM9+/8vw2lo88EqDjdHK4/BzslI"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 368,
    "path": "../public/assets/TenantStatusBadge-DekhKNWt.js"
  },
  "/assets/TenantTable-ChY4p-hK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"163a-DdZMxC7n87pWtGX5OhOHn2YW49s"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 5690,
    "path": "../public/assets/TenantTable-ChY4p-hK.js"
  },
  "/assets/Textarea-fovF_vdq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"345-UZ7LsY+onkRYR7mROEN6h8Xk2qQ"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 837,
    "path": "../public/assets/Textarea-fovF_vdq.js"
  },
  "/assets/ThemePreview-DmPK2IK7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6d3-lDcKf555JV+XH5yj2z+LCqHUjMQ"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1747,
    "path": "../public/assets/ThemePreview-DmPK2IK7.js"
  },
  "/assets/Toast-XMG8nQGc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72-6I+Jr5epZN0JQ77c7/JoKqlI7uM"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 114,
    "path": "../public/assets/Toast-XMG8nQGc.js"
  },
  "/assets/TimePicker-CI48qCUm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"370-sQoJUGYwlNbEZf7Uw7gVkeWdb+M"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 880,
    "path": "../public/assets/TimePicker-CI48qCUm.js"
  },
  "/assets/Toggle-DkKF_m6O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37c-i99bnadHAhEJcfto8xSOR4xZwtE"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 892,
    "path": "../public/assets/Toggle-DkKF_m6O.js"
  },
  "/assets/_admin-pSM4qMbr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb9-zoqI0RHqIeWTpiS40X/NphQlrzI"',
    "mtime": "2026-08-12T03:05:50.945Z",
    "size": 3257,
    "path": "../public/assets/_admin-pSM4qMbr.js"
  },
  "/assets/_admin.admin.dashboard-CZFT8o0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22c-JYo27BEXKVz8imKHf9fGtgTSa7I"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 556,
    "path": "../public/assets/_admin.admin.dashboard-CZFT8o0K.js"
  },
  "/assets/_admin.admin.dashboard-lHZ_vOe1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"941-rO5/wm25JVjNC7hwd/INQnmFgLA"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 2369,
    "path": "../public/assets/_admin.admin.dashboard-lHZ_vOe1.js"
  },
  "/assets/_admin.admin.login-CGIVeMeN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94a-cu/13R+yqWxyrczBELHRf7IH8GQ"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 2378,
    "path": "../public/assets/_admin.admin.login-CGIVeMeN.js"
  },
  "/assets/_admin.admin.settings-cd8uuV7b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f-8rxuYp+sSRxD0GG5WTKrzQaiKNo"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 2623,
    "path": "../public/assets/_admin.admin.settings-cd8uuV7b.js"
  },
  "/assets/_admin.admin.tenants._tenantId-CnAU2Sa3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1890-GXgkCpBnSri3T4WzU6BM7Z/PeZs"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 6288,
    "path": "../public/assets/_admin.admin.tenants._tenantId-CnAU2Sa3.js"
  },
  "/assets/_admin.admin.tenants-B4VslBj3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"547-66gfkxWq+ToSQMoRKUAnffDL6Ec"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 1351,
    "path": "../public/assets/_admin.admin.tenants-B4VslBj3.js"
  },
  "/assets/_admin.admin.tenants.new-DrgylSx2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"104e-WDYBg5w7btEo9fSdWT3qmXhP924"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 4174,
    "path": "../public/assets/_admin.admin.tenants.new-DrgylSx2.js"
  },
  "/assets/_app.ai-assistant-CbH787Gn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1184-fQ0ON+GpqbvoLyEFk0yvYQBldyI"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4484,
    "path": "../public/assets/_app.ai-assistant-CbH787Gn.js"
  },
  "/assets/_app.announcements-Dwdv7FfC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"82f-V+ngsOmBng+eeK6mJzGjlDhfjHc"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 2095,
    "path": "../public/assets/_app.announcements-Dwdv7FfC.js"
  },
  "/assets/_app.attendance.index-ufbXvZE-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4bc5-1Sl/AK5lQRcBlvQ9MLECouHo6jg"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 19397,
    "path": "../public/assets/_app.attendance.index-ufbXvZE-.js"
  },
  "/assets/_app.attendance.records-DHhFkUvO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21e3-lnpZmGKhudLmhV1JfpnEOn7o/BA"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 8675,
    "path": "../public/assets/_app.attendance.records-DHhFkUvO.js"
  },
  "/assets/_app.attendance.regularization-BVaQtuMA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c89-4kuzqmED+AJdO8IPVg/Z2tDuHbg"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 3209,
    "path": "../public/assets/_app.attendance.regularization-BVaQtuMA.js"
  },
  "/assets/_app-Bn44z0GW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14214-51Z7OVv4hV4/BLXYDJPbGDVh+0A"',
    "mtime": "2026-08-12T03:05:50.945Z",
    "size": 82452,
    "path": "../public/assets/_app-Bn44z0GW.js"
  },
  "/assets/_app.attendance.regularization.approvals-DLvl50iP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e41-ZpPHOfciF2pPh6VJ+A4YmjkZ4q4"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 7745,
    "path": "../public/assets/_app.attendance.regularization.approvals-DLvl50iP.js"
  },
  "/assets/_app.attendance.team-BaYlivxN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10f8-ZkYi7kvWmbLv9bCp8fBqCfOUzQM"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 4344,
    "path": "../public/assets/_app.attendance.team-BaYlivxN.js"
  },
  "/assets/_app.attendance.regularization.index-BayIZJAJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3322-9YCqgTk/7dI7kERZ5GnQRt58a7A"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 13090,
    "path": "../public/assets/_app.attendance.regularization.index-BayIZJAJ.js"
  },
  "/assets/_app.candidates.invite-D0Thz1cw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a0-+zyAbPWzqEJSygdSfOhd5zjO5ug"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 4768,
    "path": "../public/assets/_app.candidates.invite-D0Thz1cw.js"
  },
  "/assets/_app.candidates.index-DioxkbCp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"332d-9wAvUCh9L3IPUHY33Un5n/o2uf0"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 13101,
    "path": "../public/assets/_app.candidates.index-DioxkbCp.js"
  },
  "/assets/_app.candidates._candidateId-BR6hoTiI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"908d-rI11pBqboJZWAe8UxjOfO7NRJ/E"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 37005,
    "path": "../public/assets/_app.candidates._candidateId-BR6hoTiI.js"
  },
  "/assets/_app.dashboard-DrP2zSTB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7958-WKdzM+kXeMPBxkqVvF5uN4D/SWo"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 31064,
    "path": "../public/assets/_app.dashboard-DrP2zSTB.js"
  },
  "/assets/_app.employees._employeeId.edit-DCPJSFWA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c3c-Abc5Wrt8dhD61xySE2aAVmFbX3Y"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 3132,
    "path": "../public/assets/_app.employees._employeeId.edit-DCPJSFWA.js"
  },
  "/assets/_app.employees.index-Bwc-qDGC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ed6-pCL4iCPYm78PAbSyEgkCRDpPijA"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 11990,
    "path": "../public/assets/_app.employees.index-Bwc-qDGC.js"
  },
  "/assets/_app.employees._employeeId-7Gk4l9jx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"97b8-rlcpfkLkQmJRi8CqF4tK+jQeooM"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 38840,
    "path": "../public/assets/_app.employees._employeeId-7Gk4l9jx.js"
  },
  "/assets/_app.employees-6QIxNRYR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-hN+27fNNlsJhOh01sp/20FMqsDc"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 95,
    "path": "../public/assets/_app.employees-6QIxNRYR.js"
  },
  "/assets/_app.expenses.index-tarS0Q5B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c49-oqsdijMG8VIenqD7y+6hU8xPnc4"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 3145,
    "path": "../public/assets/_app.expenses.index-tarS0Q5B.js"
  },
  "/assets/_app.employees.new-Bl_CgW-I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1b-6m4kAqSago70Eolau1zu7HAvv1A"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 3867,
    "path": "../public/assets/_app.employees.new-Bl_CgW-I.js"
  },
  "/assets/_app.expenses.new-CuzxAbkI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9ea-krbGtJR0a5al3QzDtziY1iAQrh4"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 2538,
    "path": "../public/assets/_app.expenses.new-CuzxAbkI.js"
  },
  "/assets/_app.helpdesk.index-C0-2B1Qv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145d-3XZ9V6dmBSkv9QPl49b4E17wWes"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 5213,
    "path": "../public/assets/_app.helpdesk.index-C0-2B1Qv.js"
  },
  "/assets/_app.helpdesk.new-Djo6UJim.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"99a-v49q20RTZMHiHl/rdZHhC3D61Z0"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 2458,
    "path": "../public/assets/_app.helpdesk.new-Djo6UJim.js"
  },
  "/assets/_app.leave.approvals-B-aDV19f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17ba-0BY3zm1jRD9XeYprnfGHb31WPbo"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 6074,
    "path": "../public/assets/_app.leave.approvals-B-aDV19f.js"
  },
  "/assets/_app.leave.apply-B3ZD1LvT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"458c-bZzJ7bax1qC86hV9jDtW9aIZ7K4"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 17804,
    "path": "../public/assets/_app.leave.apply-B3ZD1LvT.js"
  },
  "/assets/_app.leave.balances-CJ3HVUO6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1f-0tQqBlvXZgABP38nO/+JUxfVcm4"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 2847,
    "path": "../public/assets/_app.leave.balances-CJ3HVUO6.js"
  },
  "/assets/_app.leave.calendar-DpuYSfHu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1045-KK9XiyKxKt/FW0t1FEUZDy6qkoI"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 4165,
    "path": "../public/assets/_app.leave.calendar-DpuYSfHu.js"
  },
  "/assets/_app.me-CVrBU44w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d38-isuatdlv0906HFCjV/zRpJtQlh0"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 11576,
    "path": "../public/assets/_app.me-CVrBU44w.js"
  },
  "/assets/_app.leave.requests-DQZYSBkv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14d5-Wk24AQYj+0LLumy7LDwK6vkxSfk"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 5333,
    "path": "../public/assets/_app.leave.requests-DQZYSBkv.js"
  },
  "/assets/_app.leave.index-CrksLWU1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"827-fPcAbfbmz5lZTtI1Z+eBb9syw6E"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 2087,
    "path": "../public/assets/_app.leave.index-CrksLWU1.js"
  },
  "/assets/_app.notifications-Tn849mtJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1a-hR67cc6W22OG3ynj7jiOA/H2f2k"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 2842,
    "path": "../public/assets/_app.notifications-Tn849mtJ.js"
  },
  "/assets/_app.org-chart-BcWUIevJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1178-0Xnpqe5QbbQWB55L4KPtwky0+BI"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4472,
    "path": "../public/assets/_app.org-chart-BcWUIevJ.js"
  },
  "/assets/_app.payroll.index-B3spCjbf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cec-bGu4kGdPAf6HWzJAhixHBwvbZD0"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 3308,
    "path": "../public/assets/_app.payroll.index-B3spCjbf.js"
  },
  "/assets/_app.payroll.payslips-DbKRqOYD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bcb-m349Ift0vEoz0Z3aX0/qSWXvGJA"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 3019,
    "path": "../public/assets/_app.payroll.payslips-DbKRqOYD.js"
  },
  "/assets/_app.payroll.runs._runId-DOnXVGKl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"339f-kDi8r7h0yhxsGS+uL1qLp4xScWE"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 13215,
    "path": "../public/assets/_app.payroll.runs._runId-DOnXVGKl.js"
  },
  "/assets/_app.payroll.declarations-CEb5rBCl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e94-Kh8WUGMb4IY9gwvD3oowZzyyUcg"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 3732,
    "path": "../public/assets/_app.payroll.declarations-CEb5rBCl.js"
  },
  "/assets/_app.payroll.runs.index-DTAhWYtC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bc1-FP9no69WO/ELNeM07xluZl6YlHs"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 3009,
    "path": "../public/assets/_app.payroll.runs.index-DTAhWYtC.js"
  },
  "/assets/_app.performance.calibration-CNd9aDSu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16e1-rr0oouw/CnJu64nnHVDJzJLPkf8"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 5857,
    "path": "../public/assets/_app.performance.calibration-CNd9aDSu.js"
  },
  "/assets/_app.performance.admin-CxB9n3bq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13ad-SJ5C+Y5DdItc2WBhurHZOEzsgp8"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 5037,
    "path": "../public/assets/_app.performance.admin-CxB9n3bq.js"
  },
  "/assets/_app.performance.goals-9DS6FuQ9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20af-Nt7+jEtQecZmF1LwZmgT7VDtY88"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 8367,
    "path": "../public/assets/_app.performance.goals-9DS6FuQ9.js"
  },
  "/assets/_app.performance.reviews-Co0fo8e6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"250f-703l/ixZntPslqrmqjq7hii7gaM"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 9487,
    "path": "../public/assets/_app.performance.reviews-Co0fo8e6.js"
  },
  "/assets/_app.performance.reviews._reviewId-BX5CzfwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"805-N8v/f6UqNdvyRTgaM6KCt7XZ0z0"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 2053,
    "path": "../public/assets/_app.performance.reviews._reviewId-BX5CzfwZ.js"
  },
  "/assets/_app.performance.team._employeeId-BDzT11zX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28ae-4vxIcVipbtGcynqwdAlZIuZ6uWc"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 10414,
    "path": "../public/assets/_app.performance.team._employeeId-BDzT11zX.js"
  },
  "/assets/_app.performance.team-Dkjw6NHQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd9-FNBZGAh8J3e4RI1h1J3NLTFd4Lw"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 3289,
    "path": "../public/assets/_app.performance.team-Dkjw6NHQ.js"
  },
  "/assets/_app.reports._reportSlug-CxmL-ln9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126d-ojmGfxF2UHyRnAFx7fwF1g1EoBY"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 4717,
    "path": "../public/assets/_app.reports._reportSlug-CxmL-ln9.js"
  },
  "/assets/_app.reports.builder._reportId-04M5tYwR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-JEgw/8EbILT8DqMkGyy9HSSBVLQ"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 564,
    "path": "../public/assets/_app.reports.builder._reportId-04M5tYwR.js"
  },
  "/assets/_app.performance.index-ClODJY00.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5eab7-fEoqBuL+y3QsqX/rBLIdvwGmYvA"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 387767,
    "path": "../public/assets/_app.performance.index-ClODJY00.js"
  },
  "/assets/_app.reports._reportSlug-BCDctHzu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-z4OHlqw7ZLCiXuNxN8O5TVA7YVs"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 564,
    "path": "../public/assets/_app.reports._reportSlug-BCDctHzu.js"
  },
  "/assets/_app.reports.builder._reportId-ucxWBOAP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91b-bN5tUuXMWDhgTYzo3p0IBsZVt7I"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 2331,
    "path": "../public/assets/_app.reports.builder._reportId-ucxWBOAP.js"
  },
  "/assets/_app.reports.builder.index-CV7QcHxm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5cb-GwGqoe9gBqy3vbAVITXR/WnuRWA"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 1483,
    "path": "../public/assets/_app.reports.builder.index-CV7QcHxm.js"
  },
  "/assets/_app.reports.builder.index-DIVdI7a8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23b-KlGrHq21MboJZsBFgu+unUjYzp4"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 571,
    "path": "../public/assets/_app.reports.builder.index-DIVdI7a8.js"
  },
  "/assets/_app.reports.index-ClPdM2H1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e87-qxBJwUdIIdAIT+oQjnBzpc6b2Ys"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 7815,
    "path": "../public/assets/_app.reports.index-ClPdM2H1.js"
  },
  "/assets/_app.reports.index-CqfiVeoF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"234-HUjiI025s91SBagIsebxnwHcHBY"',
    "mtime": "2026-08-12T03:05:50.947Z",
    "size": 564,
    "path": "../public/assets/_app.reports.index-CqfiVeoF.js"
  },
  "/assets/_app.settings-DwflFwAL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1019-4uiXV2rUznbHGsAQghW0fx2+xAg"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4121,
    "path": "../public/assets/_app.settings-DwflFwAL.js"
  },
  "/assets/_app.settings.company.departments-BtXbLjYO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"def-MKwjz7JoQr2mQg2B12YviYPY2co"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 3567,
    "path": "../public/assets/_app.settings.company.departments-BtXbLjYO.js"
  },
  "/assets/_app.settings.attendance-Dww65Cty.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d03-X7KPK1PCW9xjOjF6ysrwUAhY0yo"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 7427,
    "path": "../public/assets/_app.settings.attendance-Dww65Cty.js"
  },
  "/assets/_app.settings.company.designations-BFgj3Q2X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fdf-ZpUnpBi9BhRtS9ShYFiczJieKkg"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 4063,
    "path": "../public/assets/_app.settings.company.designations-BFgj3Q2X.js"
  },
  "/assets/_app.settings.company.holidays-CVBbuRRG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-0QfMPJgxPzhdNhXCnzPJ29v8JZ8"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.company.holidays-CVBbuRRG.js"
  },
  "/assets/_app.settings.forms._formId.preview-CBiUgznG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ff-MQBjjjSU2Reb29aTc8OFSsDUeOw"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 1535,
    "path": "../public/assets/_app.settings.forms._formId.preview-CBiUgznG.js"
  },
  "/assets/_app.settings.company-ChYJAWzF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"955-4A5YLeqSMQZNNNnBqLkGDJ+fV74"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 2389,
    "path": "../public/assets/_app.settings.company-ChYJAWzF.js"
  },
  "/assets/_app.settings.forms._formId.submissions-BTdsI7el.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bf9-ljN14y2hDr2V1LUc3OGmkF0sieM"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 3065,
    "path": "../public/assets/_app.settings.forms._formId.submissions-BTdsI7el.js"
  },
  "/assets/_app.settings.company.work-calendar-AsXuX4op.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b8-vC1FE9T0uz2sMUR0ker8aWNPt/Q"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 5048,
    "path": "../public/assets/_app.settings.company.work-calendar-AsXuX4op.js"
  },
  "/assets/_app.settings.forms.new-R5UwKWfm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"251-w7bhnYTfrvfAWZ/GNhhOKlfO+X4"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 593,
    "path": "../public/assets/_app.settings.forms.new-R5UwKWfm.js"
  },
  "/assets/_app.settings.forms._formId.index-DWI4lej7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5746-Yb7+qWhQ9ikqh+FFK81QA4kc30E"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 22342,
    "path": "../public/assets/_app.settings.forms._formId.index-DWI4lej7.js"
  },
  "/assets/_app.settings.forms.index-I_xo-xQB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126f-dOk3X38KGlBxz2i4WM54sDY30Zs"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 4719,
    "path": "../public/assets/_app.settings.forms.index-I_xo-xQB.js"
  },
  "/assets/_app.settings.hiring.rejection-reasons-BjCi6V8q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"114b-/Es92xksdx0SMA6kbBYVConNasM"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 4427,
    "path": "../public/assets/_app.settings.hiring.rejection-reasons-BjCi6V8q.js"
  },
  "/assets/_app.settings.leave.index-DVu0NSc1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2374-jsfs58DFJ64nox0RaFWotskFgtY"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 9076,
    "path": "../public/assets/_app.settings.leave.index-DVu0NSc1.js"
  },
  "/assets/_app.settings.payroll.structures-DbKThucD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16ed-8+31xTUQhUxwNnY4bzwBC7Scuk0"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 5869,
    "path": "../public/assets/_app.settings.payroll.structures-DbKThucD.js"
  },
  "/assets/_app.settings.leave.policies-B0A5Thzw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1963-TgSG4YlqugzEB4iqxWFGiSYbtuM"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 6499,
    "path": "../public/assets/_app.settings.leave.policies-B0A5Thzw.js"
  },
  "/assets/_app.settings.roles-Dc-fPaMK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"687-8tOCRa6xbK0H6ng5reJTb6MrO18"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 1671,
    "path": "../public/assets/_app.settings.roles-Dc-fPaMK.js"
  },
  "/assets/_app.settings.roles._roleId.edit-DV9eLtZN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"608-4FFsMFiyRmoTQTM7dEbajfn87Ac"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 1544,
    "path": "../public/assets/_app.settings.roles._roleId.edit-DV9eLtZN.js"
  },
  "/assets/_app.settings.payroll.index-BIvJan7z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2756-hIy+LDhMouPQk/hx+40G7jClOeA"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 10070,
    "path": "../public/assets/_app.settings.payroll.index-BIvJan7z.js"
  },
  "/assets/_app.settings.roles._roleId.index-CpqYpc1m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d25-9MJ3WtSw4jmhtCRmAUvE9U7b2O0"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 3365,
    "path": "../public/assets/_app.settings.roles._roleId.index-CpqYpc1m.js"
  },
  "/assets/_app.settings.roles.audit-DwQ0aSW0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9dc-4KaVK7ZD039okyd2sd1NRVHehnQ"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 2524,
    "path": "../public/assets/_app.settings.roles.audit-DwQ0aSW0.js"
  },
  "/assets/_app.settings.roles.assignments-zTlVTwNp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bd0-rOW73l/TSzYfNG5VThuPqlrjjfQ"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 3024,
    "path": "../public/assets/_app.settings.roles.assignments-zTlVTwNp.js"
  },
  "/assets/_app.settings.roles.index-B8TgFori.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f2-tyRiUWJaUnQ+UEtUUdPd2CJ16tw"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 4594,
    "path": "../public/assets/_app.settings.roles.index-B8TgFori.js"
  },
  "/assets/_app.settings.roles.new-DsX_oLrB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"94f-JSwviqM2et/MfKMu3FQoTEJhzRY"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 2383,
    "path": "../public/assets/_app.settings.roles.new-DsX_oLrB.js"
  },
  "/assets/_platform.onboarding-B-stb58w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcc-KnQSbmctw82C9L4z9Rw1NcRQT+s"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 3532,
    "path": "../public/assets/_platform.onboarding-B-stb58w.js"
  },
  "/assets/_platform-DOOi8MeC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"351-TQ+un2f1QkDVOw4MQhv65vmPV5k"',
    "mtime": "2026-08-12T03:05:50.945Z",
    "size": 849,
    "path": "../public/assets/_platform-DOOi8MeC.js"
  },
  "/assets/_app.settings.roles.delegation-Cmx4Lmi_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130c-1JRTEwInhEwJLQQC412/PY32J7A"',
    "mtime": "2026-08-12T03:05:50.954Z",
    "size": 4876,
    "path": "../public/assets/_app.settings.roles.delegation-Cmx4Lmi_.js"
  },
  "/assets/_platform.onboarding.admin-BVJce_Jh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc6-5p3EZWy0LKGGHxw8uLQP7Crm8ho"',
    "mtime": "2026-08-12T03:05:50.947Z",
    "size": 3526,
    "path": "../public/assets/_platform.onboarding.admin-BVJce_Jh.js"
  },
  "/assets/_platform.onboarding.brand-CI50RU1f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10b3-CpfgZqLtI/NoZxju6f5aDUXWAbg"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4275,
    "path": "../public/assets/_platform.onboarding.brand-CI50RU1f.js"
  },
  "/assets/_portal-CHxDNsu6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"76e-Cpvlmsgk+HGdOI3dlObFH98u0xM"',
    "mtime": "2026-08-12T03:05:50.945Z",
    "size": 1902,
    "path": "../public/assets/_portal-CHxDNsu6.js"
  },
  "/assets/_portal.portal._pipelineId.form-DmKoKUTW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f7-3quZEMto0T90A34B7hxBR/MRoAo"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 2551,
    "path": "../public/assets/_portal.portal._pipelineId.form-DmKoKUTW.js"
  },
  "/assets/_portal.portal._pipelineId.offer-K-lk3fHR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"30d-btYqHqQsNf6MdeXrL6ilJiYQpJg"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 781,
    "path": "../public/assets/_portal.portal._pipelineId.offer-K-lk3fHR.js"
  },
  "/assets/_portal.portal.index-TyPY4TcE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"737-FenV7kvZ8J9imWT83wy/7DpsyQI"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 1847,
    "path": "../public/assets/_portal.portal.index-TyPY4TcE.js"
  },
  "/assets/admin-CEYTrSeu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147c-S5sw4ai2mRH34kg8k7tst5bnISE"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 5244,
    "path": "../public/assets/admin-CEYTrSeu.js"
  },
  "/assets/_portal.portal._pipelineId.index-Bxv1RPaT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a78-bJNKbVjLWVyyMCs562ylaCwu3Ao"',
    "mtime": "2026-08-12T03:05:50.953Z",
    "size": 6776,
    "path": "../public/assets/_portal.portal._pipelineId.index-Bxv1RPaT.js"
  },
  "/assets/_platform.onboarding.review-CET3QCju.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"122f-s2IjbTW7HCD9phVSUU4811F5IAg"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4655,
    "path": "../public/assets/_platform.onboarding.review-CET3QCju.js"
  },
  "/assets/ai-CKMXX-pJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2138-e94ODoGHFyd7WpzehynBWdtN8xk"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 8504,
    "path": "../public/assets/ai-CKMXX-pJ.js"
  },
  "/assets/auth-B_OAxlyB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"43b-22U6iWi7M8nc/HWC0QyTY31HFxE"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 1083,
    "path": "../public/assets/auth-B_OAxlyB.js"
  },
  "/assets/award-BQrHdleI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"119-nC8fyfoNOjiMuY/xtGC5a33Xz7k"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 281,
    "path": "../public/assets/award-BQrHdleI.js"
  },
  "/assets/auth-D4nQ845N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"443-+a4t7kVTeTYIBkdV9m7ZvIPSAIs"',
    "mtime": "2026-08-12T03:05:50.947Z",
    "size": 1091,
    "path": "../public/assets/auth-D4nQ845N.js"
  },
  "/assets/bell-BlNUfyCi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-i0imtjl7SSWjEPI5Hf39ovZD0Y0"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 302,
    "path": "../public/assets/bell-BlNUfyCi.js"
  },
  "/assets/briefcase-BvHTgXyt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-VxVaBFNQ1EmXecsGV/UslaFZebk"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 232,
    "path": "../public/assets/briefcase-BvHTgXyt.js"
  },
  "/assets/calendar-_8IDGKWU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d-6lkaHyOuuBH2MUR/oS+sFMVZTPE"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 269,
    "path": "../public/assets/calendar-_8IDGKWU.js"
  },
  "/assets/calendar-days-BlwDj5YD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-rcW3QscU0fRlvsIxg/BucPEhE3Y"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 506,
    "path": "../public/assets/calendar-days-BlwDj5YD.js"
  },
  "/assets/attendance-BkGJE-Ur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"203-0EXbj37NyqpH57BjGAUI+2GnWk0"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 515,
    "path": "../public/assets/attendance-BkGJE-Ur.js"
  },
  "/assets/_platform.login-CkeU2nuQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12ee-EodENEKo+pyAPQxWvtZ/OCK6iKU"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 4846,
    "path": "../public/assets/_platform.login-CkeU2nuQ.js"
  },
  "/assets/arrow-up-right-DxE31nIq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-HmVYU48XeIDKXIJ0sTKg9fUMlcw"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 179,
    "path": "../public/assets/arrow-up-right-DxE31nIq.js"
  },
  "/assets/candidates-70G6VgLP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2687-611dm+7x9HGTrs0N5SYEfA7RspQ"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 9863,
    "path": "../public/assets/candidates-70G6VgLP.js"
  },
  "/assets/candidate-iiHXj_aH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"694-TLQ8S1zSZp6FoBIxKkA8GCCPpmY"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 1684,
    "path": "../public/assets/candidate-iiHXj_aH.js"
  },
  "/assets/chart-column-KYM72LC7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-Cco8gSxwim28YpZVAal+umg2Od8"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 263,
    "path": "../public/assets/chart-column-KYM72LC7.js"
  },
  "/assets/check-Cyg52hFN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-pMyO8LtGDBlASFKkdU0uOOO19Es"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 131,
    "path": "../public/assets/check-Cyg52hFN.js"
  },
  "/assets/chevron-right-D1zlRU6X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e0-YAizpHYCTOPX5UUHuqukJ23ZPfo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 224,
    "path": "../public/assets/chevron-right-D1zlRU6X.js"
  },
  "/assets/circle-alert-B9Cgew-M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"106-kztgoh6P7QyjOdedWLmJPk4IUyc"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 262,
    "path": "../public/assets/circle-alert-B9Cgew-M.js"
  },
  "/assets/circle-check-DaxtihUG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9-8jSsk0TN6IE70+Tdei2+6qKWsQA"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 185,
    "path": "../public/assets/circle-check-DaxtihUG.js"
  },
  "/assets/clock-D0J8oRDD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0-51bYHheVzPQwcIKS4PGQvF921S0"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 176,
    "path": "../public/assets/clock-D0J8oRDD.js"
  },
  "/assets/createLucideIcon-C-1SRUx4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-LTwOVxsdrJcWzjPgyydtjryjKI4"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1202,
    "path": "../public/assets/createLucideIcon-C-1SRUx4.js"
  },
  "/assets/defaults-jxLY-CuN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"92-jIaGhVbZmJGfP4EH8xp1SjanFKI"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 146,
    "path": "../public/assets/defaults-jxLY-CuN.js"
  },
  "/assets/chevron-down-BF3ciqz-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c-WDr7KkRErEKAC5obQHt72eoHHUA"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 140,
    "path": "../public/assets/chevron-down-BF3ciqz-.js"
  },
  "/assets/dollar-sign-B3BvaTkK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e7-kbw9fHLk1tPQQCyvvBbG186Q4h0"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 231,
    "path": "../public/assets/dollar-sign-B3BvaTkK.js"
  },
  "/assets/ellipsis-NcaUerM-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-DFqzXl98grSV6dXbXuoWtvDoiVE"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 233,
    "path": "../public/assets/ellipsis-NcaUerM-.js"
  },
  "/assets/ess-CeCy67nS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"309-EMXSKuzcxAlyp3Quovw5/44Vq0A"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 777,
    "path": "../public/assets/ess-CeCy67nS.js"
  },
  "/assets/file-text-BWrkMmLw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18d-f2o6DHftUEPHf+BXKXq986wU1lU"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 397,
    "path": "../public/assets/file-text-BWrkMmLw.js"
  },
  "/assets/employee-DXwVkTp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dd-dzLDMZWdD3CU9q8o7uFJvdLd/64"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 221,
    "path": "../public/assets/employee-DXwVkTp3.js"
  },
  "/assets/forms-CAtwHlbR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c0a-xyJiaXjEjc9kOolbfaY7WgKV+/c"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 3082,
    "path": "../public/assets/forms-CAtwHlbR.js"
  },
  "/assets/formConditions-B3k6BsX0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12c1-WqApgUEHSWu9rqZGbNRzJQKAQCg"',
    "mtime": "2026-08-12T03:05:50.951Z",
    "size": 4801,
    "path": "../public/assets/formConditions-B3k6BsX0.js"
  },
  "/assets/leave-BMGK6tPz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-UCtrj5+BEw2zaCk0BGm1Hr3FAoI"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 386,
    "path": "../public/assets/leave-BMGK6tPz.js"
  },
  "/assets/localStorage-BwOw2TLD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174a-Htd5ev8Dsbw2Lm/2gQryaUjGR/A"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 5962,
    "path": "../public/assets/localStorage-BwOw2TLD.js"
  },
  "/assets/lock-C8kk2vKa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d5-BjYwXf+eQgXrw+LVaLm6xXyCClI"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 213,
    "path": "../public/assets/lock-C8kk2vKa.js"
  },
  "/assets/pen-line-D6ABWWYY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"121-qlcXJVPd64lOzuGanUHdA0L1ZLw"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 289,
    "path": "../public/assets/pen-line-D6ABWWYY.js"
  },
  "/assets/onboarding-nxUpToMe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fa-TROKemlriIcIS3iAKL03jMVoVP8"',
    "mtime": "2026-08-12T03:05:50.947Z",
    "size": 1530,
    "path": "../public/assets/onboarding-nxUpToMe.js"
  },
  "/assets/index-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-08-12T03:05:50.945Z",
    "size": 41,
    "path": "../public/assets/index-DtqBFgK5.js"
  },
  "/assets/index-DFzcEMLh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"942dd-h/DBKIDWI88w/CaC+lKvLkWBC/c"',
    "mtime": "2026-08-12T03:05:50.955Z",
    "size": 606941,
    "path": "../public/assets/index-DFzcEMLh.js"
  },
  "/assets/rbac-CXakvsRD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2455-ac+IwUCMPZLJOtaAcm5QTHRiDtU"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 9301,
    "path": "../public/assets/rbac-CXakvsRD.js"
  },
  "/assets/plus-BqxdKhVp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-1HnER+FR/iFPhOpt4q3spQIw+EY"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 165,
    "path": "../public/assets/plus-BqxdKhVp.js"
  },
  "/assets/performance-DtSari8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"246-hEuMcNKrgX+fZITKlA41iSBTWhc"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 582,
    "path": "../public/assets/performance-DtSari8d.js"
  },
  "/assets/rbac-CeoCwlut.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d1-zvulwx6afX8UFhlr7eZMRglfFt0"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 209,
    "path": "../public/assets/rbac-CeoCwlut.js"
  },
  "/assets/save-B3Gt2q3P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-J+aTv1bZHgVeLCHVwE9gol62Llo"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 339,
    "path": "../public/assets/save-B3Gt2q3P.js"
  },
  "/assets/search-B9HZ1ytQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-3aknNOnxnzKZ8+lgrHcOaxbKJWc"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 181,
    "path": "../public/assets/search-B9HZ1ytQ.js"
  },
  "/assets/shield-check-Cwl5Qf_V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147-+SGQKn0HPqkRG+T6mWH81MWcCUc"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 327,
    "path": "../public/assets/shield-check-Cwl5Qf_V.js"
  },
  "/assets/square-DGLiNnmn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22d-VqqUcBV8b5OHeLBcbEZ1rSMXrzQ"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 557,
    "path": "../public/assets/square-DGLiNnmn.js"
  },
  "/assets/send-C6poGjKe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12e-vlhT3zIaHZII79bGgtJ0y1FVcXI"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 302,
    "path": "../public/assets/send-C6poGjKe.js"
  },
  "/assets/shield-alert-Ckah5aXx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d-KBTZuZuFSel5lIwDLgyzTEr3boo"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 365,
    "path": "../public/assets/shield-alert-Ckah5aXx.js"
  },
  "/assets/sparkles-DwUSQU2B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fa-RTNVeCBnEBXHa29fjM0XhCq2gWs"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 506,
    "path": "../public/assets/sparkles-DwUSQU2B.js"
  },
  "/assets/tenant-BkXBot6L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a5-eZR6Z1yhviD/oLmvpgCIapigxvk"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 677,
    "path": "../public/assets/tenant-BkXBot6L.js"
  },
  "/assets/target-Cbce7q6H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-SNDpSUQKUs3BidcCk3frdMgt82o"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 233,
    "path": "../public/assets/target-Cbce7q6H.js"
  },
  "/assets/tenants-DSeGHiDq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"350-Sa+RHnYJiTA2wQY7kpiJGRyjnBA"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 848,
    "path": "../public/assets/tenants-DSeGHiDq.js"
  },
  "/assets/trending-up-DIyZ0fpP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bb-G4VsQMWaA+Xf8xsOt1mtj775wIY"',
    "mtime": "2026-08-12T03:05:50.950Z",
    "size": 187,
    "path": "../public/assets/trending-up-DIyZ0fpP.js"
  },
  "/assets/square-check-big-BTKWFF-y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1-rnzPuVy0/nVZrOySd+GCRnsRfwo"',
    "mtime": "2026-08-12T03:05:50.952Z",
    "size": 241,
    "path": "../public/assets/square-check-big-BTKWFF-y.js"
  },
  "/assets/triangle-alert-DOmT0gF_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"115-WyXSBr2QtKiW65eaOgilb3/O8AQ"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 277,
    "path": "../public/assets/triangle-alert-DOmT0gF_.js"
  },
  "/assets/styles-D1--Fvsz.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"21eb7-xqYGlfI8Wr0Ax7x7fBimhmW2q0M"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 138935,
    "path": "../public/assets/styles-D1--Fvsz.css"
  },
  "/assets/useAiChat-F8yoQ4-O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2bab-jMT4OyC3o0sHb05hjGhMeRf5dOI"',
    "mtime": "2026-08-12T03:05:50.946Z",
    "size": 11179,
    "path": "../public/assets/useAiChat-F8yoQ4-O.js"
  },
  "/assets/useCurrentEmployee-DgJX0D_R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18e-1WpvfDN/BXE2SdeoMor4fOU5VhE"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 398,
    "path": "../public/assets/useCurrentEmployee-DgJX0D_R.js"
  },
  "/assets/usePermission-XcUGQZsP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"134-RYxLhqUGF4MnnBlZFBgMY0E2eG4"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 308,
    "path": "../public/assets/usePermission-XcUGQZsP.js"
  },
  "/assets/useRouterState-CpOdcs3J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-64YgpoKm2T9QdKbHMXbKtXEEPRE"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 350,
    "path": "../public/assets/useRouterState-CpOdcs3J.js"
  },
  "/assets/user-check-Cwtnbao7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-sPmKrovBSpJgc4DnziP+HSO83vk"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 250,
    "path": "../public/assets/user-check-Cwtnbao7.js"
  },
  "/assets/users-tmjDbIqH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e-MitC1q63xbohEi4hRVkbvsw1lgg"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 318,
    "path": "../public/assets/users-tmjDbIqH.js"
  },
  "/assets/utils-kXW4prSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69e-bFIRWVeHky7fyTZGF6zHzjKRO7Y"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 1694,
    "path": "../public/assets/utils-kXW4prSi.js"
  },
  "/assets/validation-CVxlmpIx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"233-r7vl+YNGNaGeiYE34Ttz2ol4tqk"',
    "mtime": "2026-08-12T03:05:50.947Z",
    "size": 563,
    "path": "../public/assets/validation-CVxlmpIx.js"
  },
  "/assets/zap-Bj2XaPmN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"112-SleGKjuvQm0s/VDdekqC4yNfZ08"',
    "mtime": "2026-08-12T03:05:50.949Z",
    "size": 274,
    "path": "../public/assets/zap-Bj2XaPmN.js"
  },
  "/assets/x-Dtzzm8Xy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-Cj7174MALYmDfpUaKSKiSu2H7gQ"',
    "mtime": "2026-08-12T03:05:50.948Z",
    "size": 166,
    "path": "../public/assets/x-Dtzzm8Xy.js"
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
