import * as types from './mutations_type.js'

export const state = {
    trading_strategy: {},
    profit: 0,
    stock_price: [0],
    holding_period: [0],
}

export const mutations = {
    [types.UPDATE](state, result) {
        state.trading_strategy = result['strategy']
        state.profit = result['profit']
        state.stock_price = result['stock price']
        state.holding_period = result['holding period']
    }
}