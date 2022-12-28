package com.dominic.marketplace.models;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Builder
public class Advert extends CreationDateEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator = "advert_seq")
    private Long id;
    private String title;
    private String description;
    private Integer price;

    private String location;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "advert_id")
    private Set<AdvertImage> advertImages;

}
