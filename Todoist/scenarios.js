module.exports = options => {
  return {
    flow: [{
      get: {
        url: options.path + options.tasks
      },

    },
      {
        post: {
          url: options.path + options.tasks,
          json: {
            content: options.taskName
          },
          capture: {
            json: "$.id",
            as: "id",
            json: "$.id",
            as: "id"
          }
        }
      }, {
        log: "current id {{ id }}"
      }, {
        get: {
          url: options.path + options.tasks + "/{{ id }}"
        }
      }, {
        post: {
          url: options.path + options.tasks + "/{{ id }}/close"
        }
      },
      {
        post: {
          url: options.path + options.tasks + "/{{ id }}/reopen"
        }
      }, {
        delete: {
          url: options.path + options.tasks + "/{{ id }}"
        }
      }]

  }
}