<template>
  <div>
    <issue-prohibitions></issue-prohibitions>
    <recent-prohibitions v-if="isRecentProhibitions"></recent-prohibitions>
    <feedback-welcome v-if="isDisplayFeedbackBanner"></feedback-welcome>
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
      "isUserHasAtLeastOneFormId",
      'getCurrentlyEditedFormObject',
      'getFormData',
      'isDisplayFeedbackBanner',
      'isDisplaySearchRecentProhibition',
      'isDisplayUserNotAuthorizedBanner',
      'isDisplayWelcomeLoginCard',
      'isRecentProhibitions'
    ]),
  },
}
</script>