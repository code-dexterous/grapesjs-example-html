import { findPageById } from '../page/page.services';

const renderHtml = async (req, res, next) => {
  try {
    const { params } = req;
    const { pageId } = params;
    const page = await findPageById(pageId);
    if (!page) {
      res.render('404');
    }
    const { content, name } = page;
    let html = content['mycustom-html'];

    const css = content['mycustom-css'];

    res.render('render', { html, css, name });
  } catch (error) {
    res.render('404');
  }
};

export default renderHtml;
