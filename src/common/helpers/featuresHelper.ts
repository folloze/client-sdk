import { FeatureName } from "../interfaces/IInitialState";

export function isFeatureEnabled(featureName: FeatureName): boolean {
    return !!window["FollozeState"].initialState.features[featureName];
}

export function areFeaturesEnabled(featureNames: FeatureName[]): boolean {
    return featureNames.every((featureName) => isFeatureEnabled(featureName));
}
