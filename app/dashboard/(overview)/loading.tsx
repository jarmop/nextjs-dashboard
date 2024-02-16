import DashboardSkeleton from '../../ui/skeletons';

/**
 * This is not really needed now that each sub component is specifying its own
 * fallback skeleton with Suspense
 */
export default function Loading() {
  return <DashboardSkeleton />;
}
