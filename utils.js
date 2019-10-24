const Joi = require('joi');

const CreateService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'CreateService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.data)
      }
    )
  })
}

const DeleteService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DeleteService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.data)
      }
    )
  })
}

const DescribeService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DescribeService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const CreateApi = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'CreateApi',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.apiId)
      }
    )
  })
}

const DescribeApi = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DescribeApi',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.apiId)
      }
    )
  })
}

const ModifyApi = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'ModifyApi',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.apiId)
      }
    )
  })
}

const ModifyService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'ModifyService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.serviceId)
      }
    )
  })
}

const DescribeUsagePlanSecretIds = ({apig, ...inputs}) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DescribeUsagePlanSecretIds',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const DescribeUsagePlan = ({apig, ...inputs}) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DescribeUsagePlan',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const CreateUsagePlan = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'CreateUsagePlan',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.usagePlanId)
      }
    )
  })
}

const ModifyUsagePlan = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'ModifyUsagePlan',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data.usagePlanId)
      }
    )
  })
}

const CreateApiKey = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'CreateApiKey',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const DescribeApiKeysStatus = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DescribeApiKeysStatus',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const BindSecretIds = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'BindSecretIds',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const BindEnvironment = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'BindEnvironment',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const ReleaseService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'ReleaseService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const UnReleaseService = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'UnReleaseService',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const DeleteApi = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DeleteApi',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const UnBindSecretIds = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'UnBindSecretIds',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const UnBindEnvironment = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'UnBindEnvironment',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const DeleteUsagePlan = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DeleteUsagePlan',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const DeleteApiKey = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DeleteApiKey',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const CheckExistsFromError = (err) => {
  if (err && err.message.match('does not exist'))
    return false
  return true
}

const DisableApiKey = ({ apig, ...inputs }) => {
  return new Promise((resolve, reject) => {
    apig.request(
      {
        Action: 'DisableApiKey',
        ...inputs
      },
      function(err, data) {
        if (err) {
          return reject(err)
        } else if (data.code !== 0) {
          return reject({code: data.codeDesc, message: data.message})
        }
        resolve(data)
      }
    )
  })
}

const Validate = (config) => {

  const usagePlanScheme = {
    usagePlanId: Joi.string().optional(),
    usagePlanDesc: Joi.string().max(200).optional(),
    // -1 disable quota
    maxRequestNum: Joi.number().integer().min(1).max(99999999).optional().default(-1),
    maxRequestNumPreSec: Joi.number().integer().min(1).max(2000).optional().default(1000),
    usagePlanName: Joi.string().min(2).max(50).required().error(new Error('"usagePlan.usagePlanName" is required'))
  }

  const globalScheme = Joi.object().keys({
    region: Joi.string().optional().default('ap-guangzhou'),
    serviceId: Joi.string().optional(),
    protocol: Joi.string().regex(/^(http|https|http&https)$/).optional().default('http'),
    serviceName: Joi.string().min(2).max(50).required().error(new Error('"serviceName" is required')),
    description: Joi.string().max(200).optional(),
    environment: Joi.string().regex(/^(prepub|test|release)$/).optional().default('release'),
    // usagePlan: Joi.object().keys(usagePlanScheme)
  }).options({ allowUnknown: true })

  const gloalResult = Joi.validate(config, globalScheme)
  if (gloalResult.error) 
    throw gloalResult.error

  const endpointsScheme = Joi.array().items(Joi.object().keys({
    apiId: Joi.string().optional(),
    description: Joi.string().max(200).optional(),
    enableCORS: Joi.boolean().optional().default(true),
    path: Joi.string().required(),
    method: Joi.string().regex(/^(GET|POST|PUT|DELETE|HEAD|ANY)$/).required(),
    function: Joi.object().keys({
      isIntegratedResponse: Joi.boolean().optional().default(true),
      functionQualifier: Joi.string().optional().default('$LATEST'),
      functionName: Joi.string().required().error(new Error('"endpoints.function.functionName" is required'))
    }).required(),
    usagePlan: Joi.object().keys(usagePlanScheme),
    auth: {
      serviceTimeout: Joi.number().integer().optional().default(15),
      secretName: Joi.string().required(),
      secretIds: Joi.array()
    }
  }));

  const endpointsResult = Joi.validate(config.endpoints, endpointsScheme)
  if (endpointsResult.error)
    throw endpointsResult.error

  return gloalResult.value
}

module.exports = {
  CreateService,
  CreateApi,
  ModifyApi,
  ModifyService,
  CreateUsagePlan,
  ModifyUsagePlan,
  CreateApiKey,
  BindSecretIds,
  BindEnvironment,
  ReleaseService,
  DescribeService,
  UnReleaseService,
  DeleteApi,
  UnBindSecretIds,
  UnBindEnvironment,
  DeleteUsagePlan,
  DeleteApiKey,
  DisableApiKey,
  DescribeUsagePlan,
  Validate,
  DescribeApiKeysStatus,
  DeleteService,
  DescribeApi,
  DescribeUsagePlanSecretIds,
  CheckExistsFromError
}
