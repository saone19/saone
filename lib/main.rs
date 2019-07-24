use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn distance_from_center(position: i32, total: i32) -> i32 {
    position - total / 2
}

#[wasm_bindgen]
pub fn coefficient(origin: i32, coefficient: i32) -> i32 {
    origin / coefficient
}