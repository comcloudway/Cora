const fs = {
    readDirSync : (path) => {
        window.resolveLocalFileSystemURL(path,
          (fileSystem) => {
            var reader = fileSystem.createReader();
            reader.readEntries(
              (entries) => {
                alert(entries);
              },
              (err) => {
                console.log(err);
              }
            );
          }, (err) => {
            console.log(err);
          }
        );
      }
} 