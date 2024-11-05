package befashionista.app_backend.Controllers;

import befashionista.app_backend.Models.Products;
import befashionista.app_backend.Services.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin // it is used to face the cors issue
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService ProductService;

    @GetMapping("/")//CsrfToken is a interface to get csrf token
    public String hiSec(HttpServletRequest request){
        CsrfToken csrf = (CsrfToken)request.getAttribute("_csrf");
        return " this is Session id : " + request.getSession().getId()
                /*+ " this is csrf id " + csrf.getToken()*/;
    }




    @GetMapping("/products")
    public List<Products> getAllProducts(){
        return ProductService.getAllProducts();
    }
    @GetMapping("/product/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable int id){
        Products product = ProductService.getProductById(id);
        if(product != null){
            return new ResponseEntity <> (product, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/products")//response entity is used for taking the http response so that use know where the prob is
    public ResponseEntity<?> addProduct(@RequestPart Products products, @RequestPart MultipartFile file){
        try{
            Products product = ProductService.addProduct(products, file);
            return new ResponseEntity<>(product,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable int id){

        Products product = ProductService.getProductById(id);
        byte[] imageData = product.getImageData();

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(product.getImageType())).body(imageData);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Products products,
                                           @RequestPart MultipartFile file) {
        Products product = null;
        try {
            product = ProductService.updateProduct(id,products,file);
        } catch (IOException e) {
            return new ResponseEntity<>("Can't be Updated",HttpStatus.BAD_REQUEST);
        }
        if(product != null){
            return new ResponseEntity<>("Updated" , HttpStatus.OK);
        } else{
            return new ResponseEntity<>("Can't be Updated",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id){
        Products products = ProductService.getProductById(id);
        if(products != null){
            ProductService.deleteById(id);
            return new ResponseEntity<>("Delete",HttpStatus.OK);
        }else {
            return new ResponseEntity<>("can not be found" ,HttpStatus.NOT_FOUND);
        }
    }
}
