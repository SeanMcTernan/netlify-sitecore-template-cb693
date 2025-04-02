//And example of a Netlify function where you simply console.log('Hello World')
export default (req: Request, context: Context) => {
    console.log('Hello World');
    return
};
