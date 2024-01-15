package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.WeightDTO;
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime;
import com.FYP18.HealthyRecipe.Repository.UserInfoRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;


@Transactional
@Service 
public class RegisteredUserService {
    
    @Autowired
    private UserInfoRepository userInfoRepository;
     
    public List<WeightDTO> getWeights(String id)
    { 
        return userInfoRepository.getWeights(id);
    }

    public UserInfoOverTime setWeight(UserInfoOverTime info)
    { 
        if(info.getId().getDate() == null)
        {
            info.getId().setDate(LocalDate.now());
        }
        return userInfoRepository.save(info);
    }
}
