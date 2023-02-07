const r =  ['foo', 'bar', 'baz', 'fozboo', 'fadfadsf'];
const Dummy = () => {
    return r.map((item, i) => <p>{item} in {i} index</p>);

    return [
        <p>foo</p>,
        <p>bar </p>,
        <p>baz</p>
    ];
}

export default Dummy;