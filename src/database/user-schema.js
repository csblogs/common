export default {
  title: 'New User Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    emailAddress: {
      type: 'string',
      format: 'email'
    },
    profilePictureURI: {
      type: 'string',
      format: 'uri'
    },
    vanityName: {
      type: 'string',
      pattern: '^[a-z0-9](?!.*--)[a-z0-9-]*[a-z0-9]$',
      minLength: 4,
      maxLength: 15
    },
    bio: {
      type: 'string',
      minLength: 0,
      maxLength: 350
    },
    websiteURI: {
      type: 'string',
      format: 'uri'
    },
    blogURI: {
      type: 'string',
      format: 'uri'
    },
    blogFeedURI: {
      type: 'string',
      format: 'uri'
    },
    cvURI: {
      type: 'string',
      format: 'uri'
    },
    linkedInURI: {
      type: 'string',
      format: 'uri'
    },
    githubUsername: {
      type: 'string'
    },
    twitterUsername: {
      type: 'string'
    }
  },
  required: ['firstName', 'lastName', 'emailAddress', 'profilePictureURI', 'vanityName', 'bio', 'blogFeedURI', 'blogURI']
};
