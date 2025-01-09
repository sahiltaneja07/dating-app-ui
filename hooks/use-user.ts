import { getRecommendations } from '@/api/user-api';
import { useQuery } from '@tanstack/react-query';

export const RECOMMENDATION_KEYS = {
    recommendation: () => ['recommendation'] as const,
} as const;

export const useRecommendationQuery = () => {
    return useQuery({
        queryKey: RECOMMENDATION_KEYS.recommendation(),
        queryFn: () => getRecommendations(),
    });
};
