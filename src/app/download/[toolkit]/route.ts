type GetParams = {
  params: {
    toolkit: string;
  };
};

// export an async GET function. This is a convention in NextJS
export async function GET(req: Request, { params }: GetParams) {
  // filename for the file that the user is trying to download
  const filename = params.toolkit;

  // external file URL
  const LOCAL_URL = `${process.env.FILE_URL}/toolkit-d.css?${Math.random()}`;

  // use fetch to get a response
  const response = await fetch(LOCAL_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${filename}.css"`,
    },
  });
}
