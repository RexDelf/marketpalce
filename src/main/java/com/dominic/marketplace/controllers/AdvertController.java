package com.dominic.marketplace.controllers;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.models.AdvertImage;
import com.dominic.marketplace.repositories.AdvertRepository;
import com.dominic.marketplace.services.AdvertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class AdvertController {

    private final AdvertService advertService;

    @GetMapping
    public List<Advert> getAdverts(){
        return advertService.findAll();
    }

    @PostMapping(value = {"/create"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> saveAdvert(@RequestPart Advert advert, @RequestPart MultipartFile[] images) throws Exception{
        try{
            Set<AdvertImage> advertImages = new HashSet<>();

            for(MultipartFile image: images){
                AdvertImage advertImage = new AdvertImage(
                        image.getOriginalFilename(),
                        image.getContentType(),
                        image.getBytes()
                );
                advertImages.add(advertImage);
            }
            advert.setAdvertImages(advertImages);
            advertService.save(advert);
            return ResponseEntity.ok().build();
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
