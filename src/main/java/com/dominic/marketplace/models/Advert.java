package com.dominic.marketplace.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
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
    @JoinTable(name = "advert_images",
    joinColumns = {
            @JoinColumn(name = "advert_id")
    },
    inverseJoinColumns = {
            @JoinColumn(name = "image_id")
    })
    private Set<AdvertImage> advertImages;

}
