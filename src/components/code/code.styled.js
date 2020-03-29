const theme = {
  plain: {
    backgroundColor: '#3c3842',
    color: '#adaab3'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: '#cdc3d9'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: '#ff5f6d'
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: '#9a86fd'
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: '#e6e6e8'
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable'
      ],
      style: {
        color: '#ffc371'
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: '#e6e6e8'
      }
    }
  ]
}

export default theme
