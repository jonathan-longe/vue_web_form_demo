<template>
  <div>
<!--    <loading-resources v-if="!allResourcesLoaded"></loading-resources>-->
<!--    <user-not-permitted-banner v-if="isDisplayUserNotAuthorizedBanner"></user-not-permitted-banner>-->
<!--    <welcome-login-card v-if="isDisplayWelcomeLoginCard"></welcome-login-card>-->
    <issue-prohibitions></issue-prohibitions>
    <recent-prohibitions v-if="false"></recent-prohibitions>
    <feedback-welcome></feedback-welcome>
  </div>
</template>
<script>
import FeedbackWelcome from "@/components/FeedbackWelcome";
import IssueProhibitions from "@/components/IssueProhibitions";
import RecentProhibitions from "@/components/RecentProhibitions";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    FeedbackWelcome,
    IssueProhibitions,
    RecentProhibitions
  },
  computed: {
    ...mapGetters([
      "allResourcesLoaded",
      "isUserHasAtLeastOneFormId",
      'getCurrentlyEditedFormObject',
      'getFormData',
      'isDisplayFeedbackBanner',
      'isDisplayIssueProhibitions',
      'isDisplaySearchRecentProhibition',
      'isDisplayUserNotAuthorizedBanner',
      'isDisplayWelcomeLoginCard',
      'isRecentProhibitions'
    ]),
  },
}
</script>