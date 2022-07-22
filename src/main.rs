mod data_structures;
mod helpers;
use data_structures::stack::{Stack, Stackable};

fn main() {
    let result = rev_string_stack("input".to_string());
    println!("{}", result);
}

fn rev_string_stack(input: String) -> String {
    let mut stack = data_structures::stack::Stack {
        data: vec![],
        size: 0,
    };
    for char in input.chars() {
        stack.push(char as i32);
    }
    let mut result = String::new();
    while stack.len() > 0 {
        result.push(stack.pop() as u8 as char);
    }
    result
}
