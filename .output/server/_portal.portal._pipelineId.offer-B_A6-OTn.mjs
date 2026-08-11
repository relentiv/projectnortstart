import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { B as Badge } from "./_ssr/Badge-BQrIKnVV.mjs";
import { C as Card } from "./_ssr/Card-C9YFlUub.mjs";
import { C as CANDIDATE_STATUS_LABELS } from "./_ssr/candidate-CM1ucsTB.mjs";
import { getPortalSession, getPipelineById } from "./_ssr/localStorage-DOek0dff.mjs";
import { a8 as Route$q } from "./_ssr/router-LFebWAoY.mjs";

import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/unenv.mjs";


import "./_libs/seroval-plugins.mjs";


import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/zod.mjs";
function OfferStubPage() {
  const {
    pipelineId
  } = Route$q.useParams();
  const navigate = useNavigate();
  const [pipeline, setPipeline] = reactExports.useState(null);
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const session = getPortalSession();
    if (!session || session.pipelineId !== pipelineId) {
      navigate({
        to: "/portal",
        search: {
          expired: "true"
        }
      });
      return;
    }
    setPipeline(getPipelineById(pipelineId));
    setReady(true);
  }, [pipelineId, navigate]);
  if (!ready) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center py-12", children: [
    pipeline ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "tenant-accent", children: CANDIDATE_STATUS_LABELS[pipeline.status] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-[16px] font-semibold text-[#0A0A0A]", children: "Offer letter signing will be available in a future update." })
  ] });
}
export {
  OfferStubPage as component
};
