const preventDefaults = e => {
  e.preventDefault()
  e.stopPropagation()
}

export const dragDrop = (idArea, cb) => {
  const dropArea = document.getElementById(idArea)

  function highlight(e) {
    dropArea.classList.add('highlight')
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.

  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })

  const handleDrop = cb => e => {
    const dt = e.dataTransfer
    const files = dt.files

    cb(files)
  }

  dropArea.addEventListener('drop', handleDrop(cb), false)
}
