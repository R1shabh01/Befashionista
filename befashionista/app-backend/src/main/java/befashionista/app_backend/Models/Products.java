package befashionista.app_backend.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String company;
    private String item_name;
    private double original_price;
    private double current_price;
    private int discount_percentage;
    private int return_period;
    private String delivery_date;

    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

    @Embedded
    private Rating rating;


    @Embeddable
    @Setter
    @Getter
    public static class Rating {
        private double stars;
        private int counts;
    }
}