package com.quicktab.server.controllers;

import com.quicktab.server.models.Product;
import com.quicktab.server.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {


    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public List<Product> getProductsForCurrentUser() {
        return productService.getAllProductsForCurrentUser();
    }

//    @GetMapping
//    public List<Product> getAllProducts(){
//
//        return productService.getAllProducts();
//    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id){

        return productService.getProductById(id).orElseThrow(() -> new RuntimeException("Product not found"));

    }

    @PostMapping
    public void createProduct(@RequestBody Product product){
         productService.addProduct(product);
    }

    @PutMapping("/{id}")
    public void updateProduct(@PathVariable Long id, @RequestBody Product product){
         productService.updateProduct(id,product);
    }

    @DeleteMapping("/{id}")
    public  void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

}
