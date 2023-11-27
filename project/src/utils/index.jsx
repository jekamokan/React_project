export const createId = new Array(10).fill(Math.random()).map(el => el * Math.random())

export const orderDataUpdate = (data = []) => { 
    return data.map(({quantity, _id}) => ({good: {_id}, count: Number(quantity) })) 
}