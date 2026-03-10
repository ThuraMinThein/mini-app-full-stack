import * as argon from 'argon2';

const hashGenerate = async (text) => {
    const hash = await argon.hash(text);
    return hash;
}

export default hashGenerate;