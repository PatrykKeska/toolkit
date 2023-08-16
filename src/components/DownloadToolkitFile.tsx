export const DownloadToolkitButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/download/toolkit");
      const cssFile = await response.text();
      const fileUrl = `data:text/css;charset=utf-8,${encodeURIComponent(
        cssFile,
      )}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "toolkit.css";
      link.click();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        className="mx-auto mb-5 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-all  duration-300 hover:bg-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
        onClick={handleDownload}
      >
        Download Toolkit.css
      </button>
    </>
  );
};
