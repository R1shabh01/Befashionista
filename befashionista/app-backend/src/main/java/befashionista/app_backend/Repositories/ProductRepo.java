package befashionista.app_backend.Repositories;

import befashionista.app_backend.Models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Products, Integer> {
    // this is jpql used to search for the product from search bar
/*    @Query("SELECT p from product p WHERE " +
    "LOWER(p.name) LIKE LOWER(CONCAT('% keyword %'))")
    List<Products> searchProduct(String keyword);
 */
}
