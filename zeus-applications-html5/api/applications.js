require('http/v3/rs-data').service()
  .dao(require("zeus-applications-html5/data/dao").create().orm)
  .execute();