'use client';

import { OfficeFlow } from '@/features/showcase/OfficeFlow';
import { OfficeExceptionGuard } from '@/features/showcase/OfficeExceptionGuard';
import { OfficeLeak } from '@/features/showcase/OfficeLeak';
import { OfficeReconciliationGuard } from '@/features/showcase/OfficeReconciliationGuard';
import { OfficeMap } from '@/features/showcase/OfficeMap';

/* =========================================================================
   LandingShowcase: the aiOFFICE product slot.

   Five sections, and the order is the argument:

     1. Watch an order run itself. The signature. A Viber message at 23:40 on a Friday
        becomes an order, a waybill, an invoice, and a confirmation, and a human stops it
        once, visibly, at the step that touches money. Nobody has to read anything.
     2. Show the exception guard holding an uncertain quantity until a human corrects it.
     3. What is the paperwork actually costing you. His inputs, his money, and NOT saved
        hours, because a Georgian hour is worth 14 GEL and the American calculator lies here.
     4. Reconcile the four records and block dispatch until they match.
     5. Pick your business, see what we would automate first, ranked by what moves money in
        this country rather than by what demos well.
   ========================================================================= */

export function LandingShowcase() {
  return (
    <div id="showcase" className="landing-showcase">
      <OfficeFlow />
      <OfficeExceptionGuard />
      <OfficeLeak />
      <OfficeReconciliationGuard />
      <OfficeMap />
    </div>
  );
}
