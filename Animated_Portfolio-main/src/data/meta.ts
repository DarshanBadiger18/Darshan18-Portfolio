export const __PORTFOLIO_META__ = (() => {
  const _author = 'Darshan Badiger';
  const _handle = 'DarshanBadiger18';
  if (!_author || !_handle) throw new Error('Portfolio author config missing');
  return {
    author: _author,
    handle: _handle,
    origin: 'https://github.com/DarshanBadiger18',
    version: '1.0.0',
  } as const;
})();
