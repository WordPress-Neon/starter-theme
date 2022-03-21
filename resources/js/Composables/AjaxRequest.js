const AjaxRequest = function (action, data, options = {}) {
  const formData = new FormData()
  formData.append('action', action)
  formData.append('security', theme.nonce)

  Object.entries(data).forEach((entry) => {
    formData.append(entry[0], entry[1])
  })

  const opts = {
    ...options,
    method: 'POST',
    credentials: 'same-origin',
    body: formData
  }

  return fetch(theme.ajaxurl, opts)
}

export { AjaxRequest as default }