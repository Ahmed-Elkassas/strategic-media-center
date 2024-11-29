"use client";

import ConsultingRequest from "@/components/consulting/ConsultingRequest";
import {withAuth} from "@/components/withAuth";

function ConsultingRequestPage() {
  return <ConsultingRequest />;
}

export default withAuth(ConsultingRequestPage);